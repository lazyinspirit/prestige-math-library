# Final-adjudicator evidence: `thm-schur-zassenhaus-existence`

Disposition: `repaired`

Source status: `verified`.

## Authoritative source verification

- https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf — David A. Craven, *Finite Group Theory*, §2.1, pp. 24-29. The notes define complements and split extensions, prove coprime $H^2$-vanishing by averaging a $2$-cocycle, deduce the abelian-kernel complement case, and then prove unconditional existence by minimal-counterexample induction: reduce the normal Hall subgroup to a minimal normal subgroup, use the Sylow normalizer/Frattini argument, obtain an elementary abelian $p$-group, and invoke the abelian case. The later solvability hypothesis is used for conjugacy, not for existence.
- https://kconrad.math.uconn.edu/blurbs/grouptheory/schurzass.pdf — Keith Conrad, *The Schur--Zassenhaus Theorem*, Lemma 4 and the two reduction proofs. This independently verifies $G=N N_G(P)$, explicitly chooses a prime divisor $p$ of $|N|$ so that $P\ne1$, computes the normalizer-intersection index, and reduces a minimal normal Hall subgroup to the elementary abelian case. It also identifies the final coprime step with vanishing of $H^2(G/N,N)$.

## Independent review and repair

I inspected the complete current statement and proof; all declared dependencies; the extension and complement conventions; the group-extension A/B pages; the batch-1 manifest, coverage notes, proof contract, and critical-risk record; the Step-6 reader/refuter evidence; the Step-7 group context; both frozen judge rejections; and both Alpha adjudications and repairs.

The first judge correctly rejected the original unsupported use of Sylow existence and conjugacy. Alpha added a Sylow dependency and repaired the normalizer-equals-$G$ branch. The second judge correctly rejected the $N=1$ base case, where the original text named the trivial subgroup rather than $G$ as the complement. Alpha corrected that base case. Those repairs were necessary but did not close the complete induction.

I repaired four further defects:

1. Step 2.1 asserted the false equality $N(K\cap H)=NK$. Since $H\le K$, the left side is just $NH$. The actual lift-back argument is that the complement relation gives $K=MH$, whence $NH=N(MH)=NK=G$ and $H\cap N=H\cap(N\cap K)=H\cap M=1$.
2. Step 3.1 introduced a “Sylow $p$-subgroup” without first choosing $p\mid|N|$, although the next branch needs $P\ne1$. The proof now chooses such a prime and cites Sylow I for existence as well as Sylow II for conjugacy. It also spells out the load-bearing calculation: for $R=N_G(P)$ and $A=R\cap N$, the Frattini equality $G=NR$ gives $R/A\cong G/N$, so $A$ is a normal Hall subgroup of the proper group $R$ and induction applies.
3. Step 4.1 invoked nontrivial center and characteristic-in-normal implies normal without declaring either dependency. I replaced unused solvability dependencies with the published nontrivial-center and characteristic-normal lemmas, then cited them exactly. The proof now explicitly observes that $\Omega_1(N)$ is a characteristic subgroup once $N$ is abelian.
4. The metadata called the proof `direct` although the controlling manifest strategy and the proof itself use induction on $|G|$. I changed `proof_strategy` and the displayed technique to induction, added the required base/IH/discharge tags, and explicitly checked that the adjusted section still satisfies $\pi(s'(q))=q$.

The remainder of the proof was independently checked. Once $N$ is elementary abelian and $Q=G/N$, a normalized section produces the left-action cocycle
$f(q,r)+f(qr,t)=q\cdot f(r,t)+f(q,rt)$.
Writing $m=|Q|$ and choosing $b$ with $bm\equiv1\pmod p$, summing over $t=x$ gives
$m f(q,r)+\sigma(qr)=q\cdot\sigma(r)+\sigma(q)$.
Because $N$ has exponent $p$, multiplication by $bm$ is the identity, so with $c=b\sigma$ one gets
$f(q,r)=c(q)+q\cdot c(r)-c(qr)$.
The adjusted section $s'(q)=i(-c(q))s(q)$ is therefore homomorphic and still projects to $q$, yielding a complement through the page's splitting criterion. The $N=1$, $N=G$, zero-dimensional cocycle sum, and finite-section choices are all covered.

Both batch-1 and merged proof-contract entries were aligned with the repaired steps and exact citations. The risk tool still classifies the item as critical (score 8), and the updated complete review is attributed to the final adjudicator. No direct dependency file was edited, so no `owner-prerequisite-repair` licence is required.

## Focused checks

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-schur-zassenhaus-existence.md` passed 1/1 with strategy `induction`.
- `node tools/rendercheck.mjs items/thm-schur-zassenhaus-existence.md` exited 0.
- Strict checking of all 42 proof-bearing batch-1 contracts exited 0 with no errors or warnings; the item-specific merged-contract check also passed.
- Both batch and merged `risk-report --require-reviewed` checks passed and recorded the complete final-adjudicator review for this critical-risk item.
- `node tools/content-policy.mjs research/frontier-29-batch-1.pages.json --json` checked 57 scoped items with 0 errors and 0 warnings.
- `node tools/depcheck.mjs --quiet` exited 0 and reported no cycles, unresolved references, or draft items on published pages.
- The repaired batch and merged contract entries are identical; `git diff --check` on the item and both contracts produced no output.
- The exact final judge hash computation returned context SHA-256 `377a533906e3eefddbcd1f4db0e80a7c9fe1572e0407732801a9901bcf6bd842` and item SHA-256 `d6b8727771b5e7f4827c8fa3e65447f9a49c203f27b843cc30a5f6d3390a5b36`.
