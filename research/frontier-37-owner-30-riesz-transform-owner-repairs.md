# Riesz-transform Step-5 owner repairs

Run: `frontier-37-owner-30`; recorded UTC: 2026-10-01T11:51:17.747197+00:00

## Authority and live-writer guard

Exact original scope: the three findings in `research/frontier-37-owner-30-refute-11.json`, the matching batch-11 contract rows, and necessary direct consumers of any changed Statement. The successful refuter11 receipt ended at 2026-10-01T11:47:37.279Z with process and dispatch exit 0. Before mutation the live Alpha writers were groups a, f, g and b; no group c writer was present. The check immediately before mutation and the final process check also found no `5a-c` dispatch. Refuter findings and engine receipts remain untouched. No decisions, risk_review, adjudication, audit, gate, certification, stage controls or commit was written.

The owner separately authorized correcting the confirmed same-item sine-integral proof-1.2 epsilon=0 defect after it was reported; that addition stays within the three item files.

## Exact changes and mathematical verification

1. Kernel size/difference/cancellation lemma: changed only its Statement's n=1 specialization from C1=14c1=14/pi to C1=28c1=28/pi. The advertised general constant remains Cn=cn*2^(n+1)*(3n+4). Indeed at n=1 this is cn*4*7. The Riesz definition and Gamma value Gamma(1)=1 give c1=1/pi. Independently checked the proof's difference estimate: with B=|x| and A=|x-h|, B/2<=A<=3B/2, and |A-B|<=|h|. The derivative of s^(-(n+1)) is bounded by (n+1)*2^(n+2)*B^(-(n+2)) on the intervening positive interval. The kernel difference is bounded by cn*[3(n+1)*2^(n+1)+1]*|h|*B^(-(n+1)), which is at most the advertised Cn bound because 1<=2^(n+1). Thus the general formula is a valid (nonsharp) bound and required no change. The h=0 and A=B cases also satisfy that estimate directly.
2. Principal-value kernel formula, proof 1.1: inserted the translation inequality 1+|y|<=(1+|x|)(1+|x-y|), yielding a fixed-x Schwartz tail constant C_(n+2)(f)*(1+|x|)^(n+2). Combined with |Kj(y)|<=cn*|y|^(-n) and |y|>1 this gives the displayed integrable bound cn*C_(n+2)(f)*(1+|x|)^(n+2)*|y|^(-n-2). Near zero the original subtraction gives cn*M*|y|^(1-n); polar coordinates give radial powers r^0 near zero and r^(-3) at infinity, both integrable on their stated regions. For continuity, every convergent sequence xk is bounded, so these tail constants have a common bound, while the global gradient bound provides the common near-zero dominator. Pointwise continuity plus dominated convergence applies to each piece. This repairs both fixed-x existence and the explicitly claimed continuity without imposing a uniform-in-x decay constant.
3. Sine-integral lemma, proof 7.1: handle z=0 directly using the identically zero integrand, and T=0 by the zero-length integral. Apply the nonzero scaling substitution only for z!=0 and T>0, where u=|z|t is a monotone differentiable surjection with positive derivative and continuous compact-truncation integrands. The existing sign/parity calculation, uniform bound and limit then apply.
4. Sine-integral lemma, proof 1.2: require epsilon>0. Division by epsilon, exponential decay to zero and the integral 1/epsilon were false or undefined at epsilon=0; all consumers of this auxiliary step already use epsilon>0. The undamped epsilon=0 tail estimate remains legitimately covered by proof 2.2 and the limit by 6.1. Statement unchanged.

Read the exact local suppliers for the Schwartz seminorms, mean-value inequality, Riesz normalization, Gamma value and improper substitution, and the polar-coordinate interface used for integrability. Schwartz polynomial decay is the standard elementary consequence of its finitely many weighted seminorm bounds at each requested degree; no new theorem or dependency is introduced. No fresh external source retrieval or whole-supplier proof audit is claimed.

## Direct consumers and contracts

The sole changed Statement belongs to the size/difference/cancellation lemma. Searching items and library for its exact ID found no other item citation/dependency; its home page `library/fourier-analysis/hilbert-and-riesz-transforms.md` lists it and summarizes the three estimates without using the erroneous one-dimensional constant. That page was read and needs no change. The other two Statements are unchanged, so their proof repairs create no downstream Statement change.

Batch-11 contract rows mirror principal-value derivation 1.1 and sine-integral derivations 1.2 and 7.1. Updated the kernel lemma's dimension-one evidence and the latter two items' degenerate-case evidence. No unrelated contract entry, dependency, citation quote or use mapping was changed.

## Scoped checks

- Exact three item files: normative proof-format checker passed 3/3, zero failures.
- Exact three item files: real YAML/KaTeX renderer check passed.
- Exact three batch-11 contract entries: strict check passed 3/3, zero errors and zero warnings.

These are local mechanical checks, not adjudication or independent mathematical acceptance. No unresolved uncertainty in the repaired arguments was identified; engine Alpha owns later adjudication and stable evidence refresh.

## SHA-256 content hashes

Hashes identify checked carrier content; they are not certification stamps.

| Item | Before | After |
|---|---|---|
| lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds | `fea5e7e0368674ecc9057933c417a2074b923ee33dfb7b509fed0c4dc22b9833` | `b5c7c3ef87b714193ef7a3d11555dd79fce3783ebbff57f5a6dfca4ac9ebb0c0` |
| lem-riesz-transform-principal-value-kernel-formula | `0a2af38f5d88f3f16bb8f55583c3814d63ac9282a2bccc32a91784308b51f5b5` | `05a8e7018dbe3fc491f6a593547b8079a4a8542b740962eecadbd6d7dcdca9e6` |
| lem-singular-kernel-sine-integral-under-countable-choice | `664fd2c3297aa4d179d228288bdf622b0b170d86555dba1324cc47a38076f335` | `5674a010ef59414e214c7cf646ac11f4560230ed46e5276492671dab629b2bc5` |

Batch-11 contract carrier after edits: `471c1654a8c4fa9185b81fbb50845d8dc6652648bfe3b4ac0c0ae886e003665b`.
