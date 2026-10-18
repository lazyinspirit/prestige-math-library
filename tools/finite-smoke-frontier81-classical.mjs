// Fixed bounded witnesses for frontier 81. Pure computations; no source/registry I/O.
// The check name selects the fixture. Optional fixture must equal that check name;
// parameters are unsupported because no caller-defined model is silently ignored.
const close = (a,b) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a-b) <= 1e-10*Math.max(1,Math.abs(a),Math.abs(b));
const demand = (ok,message) => { if (!ok) throw new Error(message); };
const entropy = ps => -ps.reduce((s,p) => s+(p===0?0:p*Math.log2(p)),0);
const words = n => Array.from({length:2**n},(_,v)=>Array.from({length:n},(_,i)=>(v>>(n-1-i))&1));
function markovLaw(n,switchP) {
  return words(n).map(w=>w.slice(1).reduce((p,x,i)=>p*(x===w[i]?1-switchP:switchP),0.5));
}
function fixed(name,compute) {
  return (smoke={}) => {
    try {
      demand(smoke && typeof smoke==='object' && !Array.isArray(smoke),'smoke must be an object');
      demand(smoke.fixture===undefined || smoke.fixture===name,'unsupported fixture selector');
      demand(smoke.parameters===undefined,'fixed fixture accepts no parameters');
      return {ok:true,summary:compute()};
    } catch(e) { return {ok:false,summary:e.message}; }
  };
}
function parse(input) {
  const dict=[''],records=[],phrases=[]; let unread=input+'#';
  while(unread.length) {
    let i=0;
    for(let j=1;j<dict.length;j++) if(unread.startsWith(dict[j]) && dict[j].length>dict[i].length) i=j;
    const c=unread[dict[i].length],phrase=dict[i]+c;
    demand(c!==undefined,'parser exhausted before terminator');
    records.push([i,c]); phrases.push(phrase); unread=unread.slice(phrase.length);
    if(c==='#') { demand(!unread.length,'terminator must be final'); break; }
    dict.push(phrase);
  }
  return {records,phrases,dict};
}
function decode(records) {
  const dict=['']; let text='',stopped=false;
  for(let r=0;r<records.length;r++) {
    const [i,c]=records[r]; demand(Number.isInteger(i)&&i>=0&&i<dict.length,'invalid parent index');
    demand(c==='0'||c==='1'||c==='#','invalid symbol');
    const phrase=dict[i]+c; text+=phrase;
    if(c==='#') { demand(r===records.length-1,'records after terminator'); stopped=true; break; }
    demand(!dict.includes(phrase),'duplicate ordinary insertion'); dict.push(phrase);
  }
  demand(stopped,'missing terminator'); return {text:text.slice(0,-1),dict};
}
const computations = {
  'subprobability-reference-point-mass': () => {
    let cases=0;
    const fixtures=[[[1],[0.5]],[[1],[1]],[[1,0],[0.5,0.5]],[[0.5,0.5],[0.25,0.25]],[[0.75,0.25],[0.5,0.5]]];
    for(const [p,q] of fixtures) {
      demand(close(p.reduce((a,b)=>a+b),1)&&q.reduce((a,b)=>a+b)<=1,'invalid finite weights');
      let D=0,lower=0;
      for(let i=0;i<p.length;i++) if(p[i]>0) { demand(q[i]>0,'reference not positive on support'); D+=p[i]*Math.log2(p[i]/q[i]); lower+=p[i]-q[i]; }
      demand(D>=-1e-12 && D*Math.LN2>=lower-1e-12,'finite KL lower bound failed');
      if(cases===0) demand(close(D,1)&&close(q.reduce((a,b)=>a+b),0.5),'authored point-mass witness failed');
      cases++;
    }
    for(const t of [0.125,0.5,1,2,8]) demand(Math.log(t)<=t-1+1e-12,'log inequality failed');
    return `${cases} finite KL fixtures, including p=(1),q=(1/2), zero p coordinate and equality; 5 log endpoints`;
  },
  'two-point-shannon-codes': () => {
    const fixtures=[{p:[0.5,0.5],code:['0','1'],L:1,K:1},{p:[0.75,0.25],code:['0','10'],L:1.25,K:0.75},{p:[1],code:[''],L:0,K:1}];
    for(const {p,code,L,K} of fixtures) {
      demand(code.every((w,i)=>code.every((v,j)=>i===j||!v.startsWith(w))),'code is not prefix-free');
      const mean=p.reduce((s,x,i)=>s+x*code[i].length,0),kraft=code.reduce((s,w)=>s+2**-w.length,0),H=entropy(p);
      demand(close(mean,L)&&close(kraft,K)&&kraft<=1&&mean>=H-1e-12&&mean<H+1,'Kraft/entropy bounds failed');
      const lengths=p.map(x=>Math.ceil(-Math.log2(x)));
      demand(lengths.reduce((s,l)=>s+2**-l,0)<=1&&p.reduce((s,x,i)=>s+x*lengths[i],0)<H+1,'Shannon construction failed');
    }
    return 'two explicit prefix codes recomputed (means 1,5/4; Kraft 1,3/4), plus singleton empty code';
  },
  'symmetric-markov-block-entropy': () => {
    let cases=0;
    for(const t of [0,0.25,0.5,1]) {
      const h=entropy([t,1-t]); let previous=0;
      for(let n=1;n<=10;n++) {
        const law=markovLaw(n,t),H=entropy(law);
        demand(close(law.reduce((a,b)=>a+b),1)&&close(H,1+(n-1)*h),'enumerated block entropy identity failed');
        demand(close(H-previous,n===1?1:h),'conditional entropy increment failed');
        demand(close(H/n-h,(1-h)/n),'finite normalized entropy remainder failed');
        previous=H; cases++;
      }
    }
    return `${cases} enumerated Markov block laws, n=1..10, switch=0,1/4,1/2,1; finite remainder only, no limit certified`;
  },
  'iid-bernoulli-half-conditional-block': () => {
    let cases=0;
    for(let k=0;k<=4;k++) for(let n=1;n<=6;n++) {
      // Construct joint masses, then obtain conditional masses by marginalization.
      const joint=new Map(); const past=new Map(); const prefixes=new Map();
      for(const w of words(k+n)) {
        const a=w.slice(0,k).join(''),b=w.slice(k).join(''),mass=w.reduce(p=>p*0.5,1),key=a+':'+b;
        joint.set(key,(joint.get(key)||0)+mass); past.set(a,(past.get(a)||0)+mass);
        for(let i=0;i<=n;i++) { const prefix=a+':'+b.slice(0,i); prefixes.set(prefix,(prefixes.get(prefix)||0)+mass); }
      }
      for(const [key,mass] of joint) {
        const [a,b]=key.split(':'),conditional=mass/past.get(a);
        let product=1;
        for(let i=0;i<n;i++) product*=prefixes.get(a+':'+b.slice(0,i+1))/prefixes.get(a+':'+b.slice(0,i));
        demand(close(product,conditional),'successive conditional factorization failed');
        demand(close(conditional,2**-n)&&close(-Math.log2(conditional)/n,1),'IID conditional block law failed'); cases++;
      }
    }
    return `${cases} finite-past/block atoms, past lengths 0..4 and block lengths 1..6; normalized information 1 bit, no infinite-past theorem certified`;
  },
  'singleton-source-recurrence': () => {
    const symbolAt=i=>'a'; const H=entropy([1]); let cases=0;
    for(let n=1;n<=64;n++) {
      let R=Infinity;
      for(let j=1;j<=8;j++) if(Array.from({length:n},(_,i)=>symbolAt(i)===symbolAt(i-j)).every(Boolean)) {R=j;break;}
      demand(R===1&&H===0&&Math.log2(R)/n===0,'singleton positive-offset recurrence failed'); cases++;
    }
    return `${cases} singleton blocks, n=1..64, positive offsets 1..8: R_n=1,h=0; inverse positive-entropy conclusion excluded`;
  },
  'first-block-endpoints': () => {
    const lengths=Array.from({length:3},(_,i)=>2**(2**(i+1)));
    demand(JSON.stringify(lengths)==='[4,16,256]','first three lengths failed');
    let N=0,H=0;
    const expected=[[4,0],[20,16],[276,16]];
    for(let j=0;j<lengths.length;j++) {
      for(let i=0;i<lengths[j];i++) {N++;H+=entropy(j%2===0?[1,0]:[0.5,0.5]);}
      demand(N===expected[j][0]&&close(H,expected[j][1]),'coordinate entropy endpoint failed');
      if(j===1) demand(close(H/N,4/5),'N2 ratio failed');
      if(j===2) demand(close(H/N,4/69),'N3 ratio failed');
    }
    // Independently expand the law over the 16 fair bits at the largest endpoint.
    const law=words(16).map(w=>w.reduce(p=>p*0.5,1));
    demand(close(entropy(law),H),'product-law entropy disagrees with coordinate sum');
    return 'L=(4,16,256), endpoints (N,H)=(4,0),(20,16),(276,16); ratios 4/5,4/69; 65,536 product-law atoms';
  },
  'explicit-lz78-parse': () => {
    const parsed=parse('0100101001');
    demand(JSON.stringify(parsed.phrases)===JSON.stringify(['0','1','00','10','100','1#']),'authored phrases disagree');
    demand(JSON.stringify(parsed.records)===JSON.stringify([[0,'0'],[0,'1'],[1,'0'],[2,'0'],[4,'0'],[2,'#']]),'authored records disagree');
    demand(JSON.stringify(parsed.dict)===JSON.stringify(['','0','1','00','10','100']),'terminal phrase inserted or dictionary differs');
    let cases=0;
    for(let n=0;n<=8;n++) for(const w of words(n)) {
      const input=w.join(''),p=parse(input),d=decode(p.records);
      demand(d.text===input&&JSON.stringify(d.dict)===JSON.stringify(p.dict),'round-trip/dictionary failed'); cases++;
    }
    demand(decode(parsed.records).text==='0100101001','authored round-trip failed');
    return `authored exact parse and terminator verified; ${cases} exhaustive binary words, length 0..8, round-trip without terminal insertion`;
  },
  'four-symbol-block-entropies': () => {
    const iid=words(4).map(w=>w.reduce(p=>p*0.5,1)),markov=markovLaw(4,0.25);
    const h=entropy([0.25,0.75]),H=entropy(markov);
    demand(close(entropy(iid),4)&&close(H,1+3*h)&&close(H/4,(1+3*h)/4),'four-symbol entropy sums failed');
    // Verify stationarity by direct matrix-vector multiplication.
    const pi=[0.5,0.5],K=[[0.75,0.25],[0.25,0.75]];
    demand(pi.every((p,j)=>close(pi.reduce((s,x,i)=>s+x*K[i][j],0),p)),'stationary marginal failed');
    return `16 IID and 16 Markov word probabilities: H4=4 and ${H}; pi K=pi, normalized Markov H4/4=${H/4}`;
  }
};
export const frontier81ClassicalChecks=Object.fromEntries(Object.entries(computations).map(([name,fn])=>[name,fixed(name,fn)]));
