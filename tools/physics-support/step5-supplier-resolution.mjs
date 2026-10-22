// An unchanged assigned consumer can have its nonfatal citation defect repaired
// at the supplier. This guard never licenses source changes or rewrites reports.
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {itemHashGuard} from './item-hash.mjs';
import {readLibraryItems} from './step5-rounds.mjs';
import {frontmatterList} from './frontmatter-list.mjs';

const hash=value=>createHash('sha256').update(value).digest('hex');
const digest=value=>hash(JSON.stringify(value));
const key=row=>JSON.stringify([row.id,row.model,row.context_sha256]);
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const hex=value=>/^[a-f0-9]{64}$/.test(value??'');
const text=value=>typeof value==='string'&&value.trim().length>=40;
const evidence=row=>row&&text(row.reason)&&row.uncertain===false
  &&Array.isArray(row.source_urls)&&row.source_urls.every(url=>/^https:\/\//.test(url))
  &&(row.source_urls.length>0||row.familiar===true);
const one=rows=>Array.isArray(rows)&&rows.length===1?rows[0]:null;
const read=path=>JSON.parse(readFileSync(path,'utf8'));

/** Native collection still authenticates every dispatch, report and normal
 * contract/context/gate obligation. Here we additionally require the original
 * on-disk assignment and exact target rows in the original report, unique
 * same-unit ownership, the exact rejected
 * citation, an actual direct supplier interface change, and current native
 * consumer AND supplier reviews. Missing evidence simply retains the ordinary
 * confirmed-defect-not-repaired error. */
export function supplierResolvedNonfatal({root,pack,reports,now,decision,matchesCurrent}) {
  try {
    if(!root||!['initial','repeat'].includes(pack.phase)||!Array.isArray(pack.rejected)
      ||decision.outcome!=='confirmed_nonfatal'||!evidence(decision)
      ||!hex(pack.before?.[decision.id])||now[decision.id]!==pack.before[decision.id]
      ||typeof matchesCurrent!=='function')return false;
    const dir=join(root,'research',pack.run+'-step5-v2');
    if(!same(read(join(dir,pack.phase+'-'+pack.round+'.json')),pack))return false;
    const owner=id=>{
      const rows=Object.entries(pack.assignments).flatMap(([unit,assigned])=>assigned
        .filter(row=>row&&typeof row==='object'&&row.id===id).map(row=>({unit,row})));
      return one(rows);
    };
    const owned=owner(decision.id);
    if(!owned||!pack.units.includes(owned.unit)||key(owned.row)!==key(decision)
      ||!same(one(pack.rejected.filter(row=>key(row)===key(decision))),owned.row))return false;
    const report=one(reports.filter(row=>String(row.unit)===owned.unit));
    const label='step5-v2-'+pack.phase+'-r'+pack.round+'-u'+owned.unit;
    // Separately authenticated owner corrections may replace OTHER subjects
    // in this unit. Only these consumer/supplier rows and their exact-use
    // evidence must equal the original; no projected target row is authority.
    const original=read(join(dir,label+'.json'));
    if(!report||report.run!==pack.run||report.phase!==pack.phase||report.round!==pack.round
      ||report.input_sha256!==digest(pack)||original.run!==pack.run||original.phase!==pack.phase
      ||original.round!==pack.round||String(original.unit)!==owned.unit||original.input_sha256!==digest(pack)
      ||!same(one(report.decisions.filter(row=>key(row)===key(decision))),decision)
      ||!same(one(original.decisions.filter(row=>key(row)===key(decision))),decision))return false;
    const dispatch=read(join(root,'research',pack.run+'-dispatch','alpha-adjudicate-'+label+'.result.json'));
    if(dispatch.ok!==true||dispatch.run!==pack.run||dispatch.role!=='alpha-adjudicate'
      ||dispatch.label!==label||dispatch.model!=='gpt-6.1-sol'||dispatch.provider_effort!=='high'
      ||!same(dispatch.covers,[owned.unit])||typeof dispatch.ended_at!=='string'
      ||Number.isNaN(Date.parse(dispatch.ended_at)))return false;
    const items=readLibraryItems(root),byId=new Map(items.map(row=>[row.id,row]));
    const aliases=new Map();
    for(const item of items)for(const alias of item.aliases??[])if(!byId.has(alias)){
      if(aliases.has(alias)&&aliases.get(alias)!==item.id)return false;
      aliases.set(alias,item.id);
    }
    const source=id=>readFileSync(join(root,'items',id+'.md'),'utf8');
    const consumer=source(decision.id),review=one(report.reviews.filter(row=>row.id===decision.id));
    if(!same(one(original.reviews.filter(row=>row.id===decision.id)),review)
      ||itemHashGuard(consumer)!==now[decision.id]||!evidence(review)
      ||review.disposition!=='unaffected'||review.metadata_repair_only!==true
      ||review.post_sha256!==now[decision.id]||!hex(review.review_context_sha256)
      ||!matchesCurrent(items,now,review))return false;
    const fm=/^---\r?\n([\s\S]*?)\r?\n---/.exec(consumer)?.[1];
    if(!fm)return false;
    const suppliers=[...new Set(frontmatterList(fm,'deps').map(id=>aliases.get(id)??id))];
    for(const id of suppliers){
      const supplierOwner=owner(id);
      if(!supplierOwner||supplierOwner.unit!==owned.unit||id===decision.id
        ||!hex(pack.before[id])||!hex(now[id])||pack.before[id]===now[id]
        ||!hex(pack.before_statements?.[id]))continue;
      // The original frozen objection must identify this very supplier. A
      // merely unrelated changed dependency cannot resolve that objection.
      const cited=[...String(owned.row.reason).matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)]
        .map(match=>aliases.get(match[1])??match[1]);
      if(!cited.includes(id))continue;
      const supplier=byId.get(id),supplierText=source(id);
      if(!supplier||itemHashGuard(supplierText)!==now[id]
        ||supplier.statement_sha256===pack.before_statements[id])continue;
      const supplierDecision=one(report.decisions.filter(row=>key(row)===key(supplierOwner.row)));
      const supplierReview=one(report.reviews.filter(row=>row.id===id));
      if(!same(one(original.decisions.filter(row=>key(row)===key(supplierOwner.row))),supplierDecision)
        ||!same(one(original.reviews.filter(row=>row.id===id)),supplierReview)
        ||!same(one(pack.rejected.filter(row=>key(row)===key(supplierOwner.row))),supplierOwner.row)
        ||!evidence(supplierDecision)||!['confirmed_fatal','confirmed_nonfatal'].includes(supplierDecision.outcome)
        ||!evidence(supplierReview)||supplierReview.disposition!=='repaired'
        ||supplierReview.post_sha256!==now[id]||!hex(supplierReview.review_context_sha256)
        ||!matchesCurrent(items,now,supplierReview))continue;
      const use=one(report.repair_notes?.consumer_uses?.filter(row=>row.id===decision.id&&row.supplier===id));
      if(!same(one(original.repair_notes?.consumer_uses?.filter(row=>row.id===decision.id&&row.supplier===id)),use)
        ||!use||use.path!=='items/'+decision.id+'.md'||use.observed_raw_sha256!==hash(consumer)
        ||use.disposition!=='assigned_review_completed'||!text(use.affected_use)
        ||!text(use.invalidated_claim)||!text(use.minimality))continue;
      return true;
    }
    return false;
  } catch { return false; }
}
