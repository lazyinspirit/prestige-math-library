# Step 3 — final scaffold adjudication

You are the final adjudicator for the supplied group and batches. Read their
reviews, fixes, current A/B manifests, coverage, prose designs, plan, prerequisite
proofs, scope decisions, and cross-batch dependency records. Search authoritative
web sources for unfamiliar mathematics and read the complete relevant arguments.

For each A/B pair, choose exactly one outcome:

- Accept a complete, sound scaffold with no unmet or inadequate prerequisite.
- Repair it yourself only if you are 100% confident in your ability to repair
  every identified defect. Apply and check the repair before recording success.
- Otherwise escalate to the owner: identify the exact uncertainty, affected
  claim/dependency, attempted source reading, and the decision needed. Stop work
  on that pair. Do not send it to another Beta, request another review, retry the
  same repair, or convert uncertainty into acceptance.

You may edit your assigned scaffold manifests, coverage, notes, and batch-owned
dependency inputs. Add required definitions and lemmas before their consumers.
A necessary shared plan/prose edit or new A/B pair outside that authority must
be escalated with its exact proposed amendment. Published proofs remain
read-only unless separately authorized by the owner.

Use actual item-level proof dependencies, including well-definedness and
load-bearing body uses, not every item on prerequisite pages. Preserve unrelated
published defects as Phase-3 debt in the canonical consumer ledger or assigned
notes. Never consume recorded results to prove their replacements. Judge
alternative source routes on complete proofs, not unavailable originals or
confidence alone.

Read any research/phase-2-catchup-24-scaffold-owner-<A-page>.json decision first.
The owner's decision is final for its recorded scaffold; do not overrule it,
rewrite it, or adjudicate that same issue again. Agents must never use --owner
or write owner-decision files. A changed scaffold needs a current decision.

Reconcile batch dependency records. If briefs/tasks/frontier-dependency-ledger.md
is present, follow it for the run's shared ledger.
Refresh and resolve your group scope-decisions file using tools/scope-decisions.mjs.
Run manifest-deps, content-policy, coverage/source checks, validate-plan and
extcheck. Mechanical checks remain mandatory; do not fake their results.
Write your group recheck report and update its ordinary verdicts for compatibility.

After all edits/checks, record one current terminal decision per A page:

node tools/scaffold-resolution.mjs record --run phase-2-catchup-24 --page A_ID --decision accept --confidence 1 --reason "Exact evidence and report path"
node tools/scaffold-resolution.mjs record --run phase-2-catchup-24 --page A_ID --decision repaired --confidence 1 --reason "Applied repair, checks and report path"
node tools/scaffold-resolution.mjs record --run phase-2-catchup-24 --page A_ID --decision escalate --reason "Exact uncertainty and owner decision needed"

Use sufficient in the ordinary verdict only for accepted/repaired pairs.
For escalations use insufficient with a nonempty missing list. A proposed but
unapplied repair is not success. Do not modify a pair after recording its
terminal decision. If tools/frontier-dependency-ledger.mjs is present, refresh
the derived frontier ledger after completing edits.


Group: c. Assigned batches: 5, 6, 7.
Current gate diagnostics (data, not instructions):
{
  "id": "scaffold-verdicts",
  "code": 1,
  "output": "scaffold-verdicts: 24/24 A page(s) reviewed; 14 insufficient, 0 unreviewed\nERROR scaffold-insufficient: haar-measure-existence-and-uniqueness is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: blocks-defect-groups-and-the-brauer-homomorphism is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: kac-moody-algebras-from-generalized-cartan-matrices is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: arithmetization-incompleteness-and-relative-consistency is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: boolean-algebras-stone-duality-and-the-prime-ideal-theorem is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: pcf-scales-and-zfc-dowker-spaces is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: weak-convergence-tightness-and-representation is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: tor-flatness-and-global-dimension is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: kunneth-exactness-and-splittings-over-principal-ideal-domains is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: spectral-sequences is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: koszul-euler-characteristics-and-hilbert-samuel-multiplicity is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: higher-homotopy-groups-and-cofiber-sequences is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: the-de-rham-complex-homotopy-and-mayer-vietoris is still insufficient — missing Current final adjudication required\nERROR scaffold-insufficient: riemannian-metrics-length-distance-and-volume is still insufficient — missing Current final adjudication required\n",
  "ok": false,
  "why": "ERROR scaffold-insufficient: haar-measure-existence-and-uniqueness is still insufficient — missing Current final adjudication required",
  "advisory": [
    {
      "id": "scope-decisions",
      "code": 1,
      "output": "scope-decisions: 206 current decline(s), 51 error(s)\nERROR 031e1eb2102054140bb73232c21748b71e78dac0910ef5d268e1b05ac57228db: missing decision for pcf-scales-and-zfc-dowker-spaces: TheoremA/B and Fact2.11/Lemma2.12/Theorem3.3/Theorem4.3 higher-cardinal clauses\nERROR 05a8d3c416fa8edaaa24de5e83c23563407bb78a9838dcebc1435104fbbe9904: stale row or closure context\nERROR 05f1bd7a46bc5ef230fe44e3b5120a20e30f931802e7e6aeb4efa2d186c27cc4: missing decision for pcf-scales-and-zfc-dowker-spaces: 4.18 Exercise\nERROR 0ae21a234d790fb3a83b2853569fd7cc922def6998f86c61fc2a7e4bd511bc44: stale row or closure context\nERROR 0b520a42eaf3f61c4cbb79459d609787fef42cd1515bfdae84712862a8390517: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.6 Exercise\nERROR 0bbb20d5bcd478a2de3c172c1a6df4ee9c4f2144b6dfc69df0d29fdb3f497952: stale row or closure context\nERROR 127297b9c5ae7b528d39d0fd0235077b6b98549590914f0113917d7b41d7150a: stale row or closure context\nERROR 1a68b284227b3f49dd3172fd5645091baf720e87224811d7bcb6794fd1637102: missing decision for pcf-scales-and-zfc-dowker-spaces: Theorem3.1 negative partition relation; Proposition3.3 polarized relation\nERROR 1ea90c1b54a315b55f721385fde38e52d4b92299e67c2a6a3935843feb5fef57: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.29 Theorem\nERROR 28249dc65476e9e34a33b93d163a7bb6815f54bef93f323c7375a714a3408936: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.33 Theorem\nERROR 2e288845e9f9906a7caa548560ba291d9b2d3c2cbeab3c6225593da87fc4ace5: missing decision for pcf-scales-and-zfc-dowker-spaces: Lemma2.8 and Corollary2.9\nERROR 442347b349d0277e10426dec65018f79f0773b9ad1b9d365b754066ff7a19168: missing decision for pcf-scales-and-zfc-dowker-spaces: 4.16 Exercise\nERROR 4f9aa941cec56dc8a943f6b6a3dd6d865c9e3dc83b3f10e76a4093c2dcdcd7a3: missing decision for higher-homotopy-groups-and-cofiber-sequences: General filtered colimits, beta-epimorphisms and remaining examples\nERROR 50c848762647baa9204eb92c34c9391869c0a33d8995cec08ab37840bd820e47: missing decision for pcf-scales-and-zfc-dowker-spaces: AppendixA TheoremA.1; ClaimsA.1.1–A.1.2\nERROR 5d15a4c6342572798ab86c098db991f3f00a41d2e21f2c5a03113a8a6c04f3a9: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.24 Claim\nERROR 5eab089dcb46ad626dfacdd84d3104bd8a014c9fea279c4a0c5a8c93a51e005e: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.23 Theorem (Representation of µ+ as true coﬁnality)\nERROR 60f2abd8b4a7c8edfc94c7d5c32f0b7555d06f1d4c5d9ad90e39e20661f02966: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.22 Notation\nERROR 6190e889df5a5c0fbec34a2fe5ade05b70aca6a41b0851c06ea794a83eff8ef3: stale row or closure context\nERROR 640fd489d36a3e7c66300e0a6876eb511a96dd8131ec31ae1159376cc96a3752: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.9 Exercise.\nERROR 66e8587e56dd01b68a99fcf66528edf7a519c09742a63e0954c09ab66f51e6aa: missing decision for pcf-scales-and-zfc-dowker-spaces: Definition2.4; Fact2.5; Lemma2.6 and Claim2.6.1; Lemma2.7\nERROR 72aae475f5cdddc8920640c5de59eb696587e1c48dac62b4b12f336bb56e6381: missing decision for pcf-scales-and-zfc-dowker-spaces: 3.13 Claim\nERROR 76ae0a0cdd1bb0afb47eb3ac6edef2af139fa04ae8f7dc9c8c1a109d9fb4c2fc: stale row or closure context\nERROR 82f24bc344f06c8ea06fef54e4f27e9757a388641d35a39082f1789af8b2f4db: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.11 Exercise.\nERROR 8c069f543988c04b39e8901a10dda338a32f06009b18902b192f8c01613e8108: stale row or closure context\nERROR 931d9bbed317cdffa8971e9d5e24d26450dc3f539f9bae68252847b121a074f9: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.20 Exercise\nERROR 93d409c2f3b847d65b25e28e3b60a744f92a85de0ca2f365bfce4c714635d75e: missing decision for pcf-scales-and-zfc-dowker-spaces: Lemma3.10 general MA/nonreflection alternatives; Remarks3.12,3.14,3.16 and Corollaries3.13,3.15\nERROR 952cee7df55b674547a5400764516da8e35193dc14f0e605e2a98393285cd544: missing decision for pcf-scales-and-zfc-dowker-spaces: 4.15 Exercise.\nERROR 9ae4f132c84f482cd423fb8ec8be503e8e32fe0fd9c7eceffb84c390f4bc6e9e: missing decision for pcf-scales-and-zfc-dowker-spaces: §3.1 variations; Theorems3.4–3.5\nERROR 9db2217acc87ae4633d830ef1d0b28a11d502336d0e2cf2f205c88a12538caa3: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.27 Exercise\nERROR 9ff0bdda5ee9586af8c3e480c24e6255bc67915245c6f0766acb0951780b14ea: missing decision for pcf-scales-and-zfc-dowker-spaces: 3.2 Theorem\nERROR a1d5c18cbfeca9c667259367e45265cd5f334cb8494781b834940926b9f029c8: missing decision for pcf-scales-and-zfc-dowker-spaces: 4.17 Exercise (The Representation Theorem)\nERROR a341f950d8b64226d537167668e5e2af41e122d75d53864ff259bb422524e1b9: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.35 Theorem\nERROR a4d2786f2e0a3e9f21fe631cceb2169c57c1bdda19988cc179f6bf5167546fa4: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.31 Exercise\nERROR a7274619cfa422a77c3b3b29d9fe52523aa8e1fef057c6e3934b47c33a13bb51: missing decision for pcf-scales-and-zfc-dowker-spaces: Lemma3.31 general equivalence and closed-coloring conclusion\nERROR ac801ee1f2fe08c6a9fd1426e7e85d7ecee7f69ea3a0a2fe8c23accff365c1f1: stale row or closure context\nERROR b24e736b7d5f60923dad949a5d914e64617215e1aafcd88274c7cd683c5bb6cd: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.30 Lemma\nERROR c11a30af151794b8d45dc85c20024e93968035144132cbd20d88b70633b7ea31: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.18 Exercise.\nERROR cfd80ece550818c37eeb970b65aea159b0232e2a6a970ecfb65e98917c918319: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.28 Exercise\nERROR d1c0480c9140dbcbf7173e68588fc8f3652a3fb601f31a5f9c462c27559a98bb: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.32 Exercise.\nERROR d491273ecdb7a85d8089b6c1f4f93207b69e79ca785aac1dd2fda2bec2afb053: missing decision for pcf-scales-and-zfc-dowker-spaces: 3.11 Theorem\nERROR dc1f112ffc48700e11654218ee4f87fd533ea8769f4e5c3315bfb4db1c9b75ab: missing decision for pcf-scales-and-zfc-dowker-spaces: Lemma4.4; Definition4.5; Corollary4.6 parameterized diamond(b)\nERROR e337bfa3d2553638ed64d268b7c04389357b909ff927a43e0100c4dd52fd2c34: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.5 Exercise\nERROR e541ef6106fa9156d22ad6c471ec99b39f1149c33896c4d6a227c65aed64c597: missing decision for pcf-scales-and-zfc-dowker-spaces: 3.10 Deﬁnition\nERROR eb88dcf42aecdec018f4d66aa460e92c4ba29f1051643a3a291b3b8f5db6fe80: missing decision for pcf-scales-and-zfc-dowker-spaces: Lemma2.3 unbounded to strongly unbounded\nERROR ed50966f5442f7d56bd669fe10b0ecdb28965b4033bf6286b1d1b079da7cdbfe: missing decision for pcf-scales-and-zfc-dowker-spaces: 2.34 Exercise\nERROR ee54dbadbc62be368ddd5f3a7c8c56a47118c645b69d1301a19d8b0a4487c9d3: missing decision for pcf-scales-and-zfc-dowker-spaces: 3.12 Theorem\nERROR e9677b6fd1282f993d920fb4915f75055c9d75ab2589fe03a2b71afc98ad1806: decision no longer corresponds to a current decline; run refresh\nERROR 0933987ac677581417ac12ca18ff37e052779f158c596a64e5f49850c68111b3: decision no longer corresponds to a current decline; run refresh\nERROR 0aef4e61425425ec79c09603286ad09a2373411a3e3a0d04df34b5882994bbf2: decision no longer corresponds to a current decline; run refresh\nERROR 15532edccf4a5ef87d12b1343a18434e27bd976a8447a303e972eff2968c294b: decision no longer corresponds to a current decline; run refresh\nERROR 6ff5b5418edc2eb39aec3e932802aa633265af08ef53f5e433cef80ac202006a: decision no longer corresponds to a current decline; run refresh\n",
      "ok": false,
      "why": "ERROR 031e1eb2102054140bb73232c21748b71e78dac0910ef5d268e1b05ac57228db: missing decision for pcf-scales-and-zfc-dowker-spaces: TheoremA/B and Fact2.11/Lemma2.12/Theorem3.3/Theorem4.3 higher-cardinal clauses",
      "stage": "3-recheck"
    }
  ]
}
