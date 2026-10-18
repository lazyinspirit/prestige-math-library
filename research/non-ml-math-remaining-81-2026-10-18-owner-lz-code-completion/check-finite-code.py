"""Exact bounded serialization/decoding evidence, not a proof of asymptotics."""
import itertools,json,math

def delta(m):
    bits=bin(m)[2:]; b=len(bits); header=bin(b)[2:]
    return '0'*(len(header)-1)+header+bits[1:]
def read_delta(bits,pos):
    z=0
    while bits[pos+z]=='0': z+=1
    d=z+1; start=pos+z; b=int(bits[start:start+d],2)
    tail=start+d; suffix=bits[tail:tail+b-1]
    assert len(suffix)==b-1
    return int('1'+suffix,2),tail+b-1
fields={'0':'00','1':'01','#':'10'}; inverse={v:k for k,v in fields.items()}
def encode(word):
    unread=word+'#'; dictionary=['']; records=[]
    while unread:
        candidates=[(len(w),i,w) for i,w in enumerate(dictionary) if unread.startswith(w)]
        _,parent,w=max(candidates); symbol=unread[len(w)]; records.append((parent,symbol)); unread=unread[len(w)+1:]
        if symbol!='#':dictionary.append(w+symbol)
    return ''.join(delta(i+1)+fields[c]for i,c in records),records

def decode(bits):
    pos=0; dictionary=['']; out=''; records=[]
    while True:
        m,pos=read_delta(bits,pos); i=m-1; symbol=inverse[bits[pos:pos+2]];pos+=2
        assert i<len(dictionary); phrase=dictionary[i]+symbol;out+=phrase;records.append((i,symbol))
        if symbol=='#':return out[:-1],pos,records
        dictionary.append(phrase)
def check_prefix(words):
    ordered=sorted(words)
    assert len(ordered)==len(set(ordered))
    assert all(not b.startswith(a) for a,b in zip(ordered,ordered[1:]))
indices=[delta(m)for m in range(1,4097)];check_prefix(indices)
for m,bits in enumerate(indices,1):
    got,end=read_delta(bits,0);assert(got,end)==(m,len(bits));b=m.bit_length();assert len(bits)==b+2*(b.bit_length()-1)
    assert len(bits)<=math.log2(m+1)+2*math.log2(math.log2(m+2))+3
codes=[]
for n in range(11):
    for tup in itertools.product('01',repeat=n):
        word=''.join(tup);bits,records=encode(word);got,end,parsed=decode(bits);assert(got,end,parsed)==(word,len(bits),records)
        assert records[-1][1]=='#';codes.append(bits)
        N=len(records);assert len(bits)<=N*(math.log2(N+1)+2*math.log2(math.log2(N+2))+5)
check_prefix(codes)
example=encode('0100101001')[1]
assert example==[(0,'0'),(0,'1'),(1,'0'),(2,'0'),(4,'0'),(2,'#')]
print(json.dumps({'status':'pass','scope':'bounded exact code checks only','indices':4096,'small_m':{str(m):delta(m)for m in[1,2,3,4]},'binary_blocks_lengths_0_through_10':len(codes),'index_and_block_prefix_checks':'pass','decode_without_source_length_or_record_count':'pass','exact_index_lengths_and_stated_length_envelopes':'pass','example_records':example,'singleton':'one known block has zero-bit code; unknown repetitions of empty word have identical encoding'},indent=2))
