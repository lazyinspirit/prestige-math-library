# Local audit 7 — products, stability, FI, and Plancherel asymptotics

## Scope and evidence status

This is a read-only audit of proposed `SYMR-13`--`SYMR-15`, not an edit to the
canonical inventory.  It independently inspected the proof joints below.

| source | authoritative complete text and validation | exact inspected proof range |
|---|---|---|
| Church--Ellenberg--Farb, *FI-modules and stability for representations of symmetric groups*, arXiv:1204.4533v4 (2014) | [arXiv PDF](https://arxiv.org/pdf/1204.4533), cached at `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/products-asymptotic-articles/cefs-fi-modules-2012.pdf`, SHA-256 `1ff5dd9de3e3663dfa8ceec86e69c1b97448d02630981b22587994be48746e96`, 54 pages. MuPDF parses it; the final page is bibliography/end matter. | §§2.3, 3.1--3.4, pp. 14--25: Prop. 2.3.6, Thm. 1.3 proof, Prop. 3.3.3, Thm. 1.13 proof, Prop. 3.4.1, Thm. 3.4.2. |
| Briand--Orellana--Rosas, *The stability of the Kronecker product of Schur functions*, arXiv:0907.4652v2 (2009; J. Algebra 331 (2011)) | [arXiv PDF](https://arxiv.org/pdf/0907.4652), cached at `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/products-asymptotic-articles/briand-orellana-rosas-kronecker-stability-2009.pdf`, SHA-256 `497b2e2219b85a65067662c6a83aeccb8e440f15332bcb17d3842bcf7010ddb0`, 16 pages. MuPDF parses it; p. 16 finishes references/addresses. | all, especially Murnaghan statement pp. 3--4; Lemma 2.1 pp. 7--8; Lemma 3.1 and Thm. 3.2 pp. 8--9. |
| Ivanov--Kerov, *The Algebra of Conjugacy Classes in Symmetric Groups and Partial Permutations*, arXiv:math/0302203v1 (2003 upload; J. Math. Sci. 107 (2001), 4212--4230) | [arXiv PDF](https://arxiv.org/pdf/math/0302203v1), reported as 19 pages in arXiv’s API; streamed original SHA-256 `85424a104255319279875e7464f313d00b0a1fd9dadf78edaf9a9cf6b7b5fcf4`. The complete author-deposited document was inspected in [ar5iv’s full rendering](https://ar5iv.labs.arxiv.org/html/math/0302203), through §12 and its translated end references. It was not copied into the cache because this local review is authorized to write only this report. | §§2--6, pp. 2--9 in the 19-page article; §9, pp. 12--13; especially Props. 6.1--6.3, Remark 6.4, and Thm. 9.1. |
| Ivanov--Olshanski, *Kerov’s central limit theorem for the Plancherel measure on Young diagrams*, arXiv:math/0304010v1 (2003) | [arXiv PDF](https://arxiv.org/pdf/math/0304010), cached at `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/products-asymptotic-articles/ivanov-olshanski-kerov-clt-2003.pdf`, SHA-256 `fc2296c027b3feb0ff6c894f9ab594d35b5d79e489795280ee70315235af1362`, 49 pages. MuPDF parses it; p. 49 completes the references. | §§2, 4--7, pp. 7--38, including proofs of Props. 4.5, 4.7--4.13, 5.1--5.7, 6.1--6.4. |

All field-dependent FI and Kronecker assertions below are over a characteristic-zero
field (and may be read over `C`).  The Plancherel assertions are finite probability
laws on partitions and need no unmentioned limiting probability space.

## SYMR-13 — audit and proof closure

### The previously missing complete Murnaghan proof is available

The scaffold correctly distrusted BOR as a proof of existence: BOR pp. 3--4
states Murnaghan’s theorem and explicitly points to Thibon, while its own new
proof starts with the theorem.  However CEF supplies a different, complete,
authoritative proof in §3.4.  The proof is not citation-only once its displayed
FI chain is included:

1. CEF Prop. 3.4.1 (pp. 23--24) constructs a finite-generated FI-module
   `V(lambda)`: it is zero below `d=|lambda|+lambda_1`, and is the padded
   irreducible `V_{lambda[n]}` at and above `d`.  It uses Pieri/branching to
   prove FI functoriality, then the nonzero image of `V(lambda)_d` to prove
   generation; its exact weight is `|lambda|` and exact stability degree is
   `lambda_1`.
2. CEF Prop. 2.3.6 (p. 14) proves that tensor products of finitely generated
   FI-modules are finitely generated: reduce to `M(m_1) tensor M(m_2)`; its
   injection-pair basis element is generated from the union of its two images,
   of size at most `m_1+m_2`.
3. CEF Thm. 1.3 (pp. 20--21) proves the needed Noetherian property over a
   Noetherian ring containing `Q`.  It makes `Phi_a(V)` a finite graded
   `k[T]`-module, uses Hilbert basis on `Phi_a(W)`, lifts its finite generators,
   then uses bounded weight and Lemma 3.2.7(iv) to kill the quotient.
4. CEF Prop. 3.3.3 (pp. 21--22) proves `weight(V)+stab-deg(V)` is a uniform
   representation-stability range.  Coinvariants detect the kernel/cokernel;
   the stable `S_m`-coinvariant decomposition inductively freezes every padded
   irreducible multiplicity.  CEF Thm. 1.13 (pp. 22--23) obtains finite
   generation => finite stability degree by presenting `V` as a quotient of a
   finite free module and applying Thm. 1.3 to its kernel.  Its converse is the
   direct eventual-span argument.
5. CEF Thm. 3.4.2 (p. 24) applies 1--4 to
   `V(lambda) tensor V(mu)`.  Thus for sufficiently large `n`, its degree-`n`
   value decomposes as a *fixed finite* sum
   `sum_nu g^nu_{lambda,mu} V(nu)_n`; these nonnegative multiplicities are
   exactly the padded Kronecker coefficients.  This proves eventual constancy.

Therefore the claim of `thm-murnaghan-stability-for-kronecker-coefficients` is
proof-closed by an inspected primary proof, provided its item graph is repaired.
It must not cite BOR as the existence proof.

### Required graph/claim repairs

The current inventory and `proposed-items.json` disagree materially.

* `def-padded-kronecker-coefficient-sequence` and
  `lem-murnaghan-littlewood-top-degree-reduced-coefficients-are-lr-coefficients`
  exist in the Markdown inventory but are absent from `proposed-items.json`.
  Add them before treating the JSON as an integration manifest.
* Define `g_n(alpha,beta,gamma)` first, then prove Murnaghan stability, then
  define `bar g`.  JSON currently makes `def-reduced-kronecker-coefficient`
  precede (and the theorem depend on) the existence theorem; that is backwards
  and hides the circular well-definedness joint.
* The JSON Kronecker definition unnecessarily depends on outer induction, while
  its character-inner-product proposition omits the self-duality/real-valued
  Specht lemma needed to write the third character without complex conjugation.
  Use exactly: `g=<chi^lambda chi^mu,chi^nu>`; the three-factor sum requires
  `S^nu ~= (S^nu)^*`.
* If the CEF proof is used locally, add a tensor-closure item and the
  `weight + stability degree => uniform stability` proposition, and make
  Murnaghan depend on them, on `prop-fi-module-realizing-one-padded-irreducible-family`,
  the FI Noetherian theorem, and finite-generation/stability.  As presently
  ordered, FI depends on SYMR-13 for padding while SYMR-13 would depend on FI.
  Hoist neutral padding to the earlier diagram/character-dictionary supplier,
  or place the Murnaghan proof item after FI; otherwise this is a dependency
  cycle.  The latter page need not depend on Kronecker theory.

### Murnaghan--Littlewood and the sharp global threshold

For partitions `alpha,beta,gamma` with
`|gamma|=|alpha|+|beta|`, the Murnaghan--Littlewood assertion is
`bar g^gamma_{alpha,beta}=c^gamma_{alpha,beta}`.  In particular
`bar g^{alpha+beta}_{alpha,beta}=c^{alpha+beta}_{alpha,beta}=1`; the unique
LR tableau adds the `alpha_i` boxes in row `i` with entry `i` (in the source’s
standard convention).  This is exactly the attainment joint, not a generic
positivity slogan.

BOR Lemma 2.1 gives the nonnegative finite expansion

`bar g^gamma_{alpha,beta} = sum g^zeta_{delta,epsilon}
 c^alpha_{delta,sigma,tau} c^beta_{epsilon,rho,tau}
 c^gamma_{zeta,rho,sigma}`.

It yields the size-triangle support conditions.  BOR Lemma 3.1 proves
`stab(alpha,beta)=max{|gamma|+gamma_1 : bar g^gamma_{alpha,beta}>0}`.
Then BOR Thm. 3.2 uses the displayed expansion and LR row bounds to obtain
`|gamma|+gamma_1 <= |alpha|+|beta|+alpha_1+beta_1`; the top-degree term
`gamma=alpha+beta` above attains equality.  Consequently, in BOR’s convention,

`stab(alpha,beta)=|alpha|+|beta|+alpha_1+beta_1`.

This is an exact **global product** threshold: the whole padded Schur internal
product has stabilized at every `n` at least this number.  It is not a sharp
threshold claimed for each fixed triple; do not conflate it with BOR’s later
per-coefficient bounds.  The `alpha=beta=(2)` boundary is `8`.

Accordingly, the threshold item must depend on the top-degree lemma and the
BOR Lemma-2.1 support-expansion joint, not on LR conjugation symmetry alone.
Likewise `prop-reduced-kronecker-support-satisfies-size-triangle-inequalities`
needs that nonnegative expansion (and ordinary Kronecker/LR degree matching),
not merely Murnaghan stability.  Pak--Panova’s row-gap theorem remains correctly
conditional: their `(2,2),(2,2),(3,1)` example has coefficient zero at `t=0`
and one for every positive first-row padding, so no from-the-start equality is
licensed without its separation hypothesis.

## SYMR-14 — FI audit

The Noetherian row is substantively sound but needs two explicit proof joints:
`Phi_a(V)_n=(V_{a disjoint-union n})_{S_n}` is always right exact and is exact
only when `k` contains `Q` (averaging).  With `V` generated through degree `a`,
CEF shows `Phi_a(V)` is finite over `k[T]`; lift finite generators of the
submodule `Phi_a(W)`, add finite generators of `W_0,...,W_{a-1}`, then apply
the bounded-weight coinvariant-detection lemma to `W/W'`.  The theorem must say
**commutative Noetherian ring containing `Q`**, not just an unspecified
Noetherian category.

The finite-generation/equivalence row needs an explicit intermediate item for
CEF Prop. 3.3.3.  The current dependencies omit it and omit
`lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight`, even though
that is what converts stable `Phi_d` maps into injectivity, `S_{n+1}`-spanning,
and multiplicity constancy.  Once added, CEF Thm. 1.13 is genuinely closed; its
proof of the main equivalence does not require the optional later monotonicity
remark.

Formula/range checks:

* `V(lambda)_n=V_{lambda[n]}` begins at `n=|lambda|+lambda_1`, is zero below,
  is generated in exactly that degree, has weight `|lambda|`, and stability
  degree `lambda_1` (CEF Prop. 3.4.1).  Thus `(2,1)` begins at five.
* For values finite-dimensional over a characteristic-zero field, a weight-`d`,
  stability-degree-`s` FI-module has a unique character polynomial of weighted
  degree at most `d` for `n>=s+d` (CEF Thm. 3.3.4).  `X_i` counts `i`-cycles and
  has weighted degree `i`.
* The free-module row should cite CEF Props. 3.1.7, 3.2.4--3.2.6: `M(W)` has
  injectivity degree zero; if the FB-module vanishes above `m`, surjectivity
  degree is at most `m`.  No unqualified finite-field or positive-characteristic
  representation-stability conclusion follows.
* The proposed pointwise-finite counterexample is legitimate only after maps
  are made functorial: take `V_n=k e_n`, all non-bijection injection maps zero,
  and bijections acting trivially.  Composition is respected and no finite
  degree set generates later `e_n`.

## SYMR-15 — imported multiplication gap closed

The hard blocker in the inventory can be removed.  IK §§2--6 supplies the full
finite combinatorial multiplication argument and IK §9 supplies the algebra
identification; IO Prop. 4.5 is precisely their transport.

For `P_n`, a partial permutation is `(d,w)` with `d subset [n]` and
`w in S_d`; multiply by extending each permutation by the identity and taking
`(d_1 union d_2,w_1 w_2)`.  In `A_infty=B_infty^{S_infty}`, orbit sums
`A_rho` are a basis.  IK Prop. 6.1 defines
`A_sigma A_tau=sum_rho g^rho_{sigma,tau} A_rho`.  IK Prop. 6.2 proves that
`g^rho_{sigma,tau}` is the number of factorization pairs with prescribed supports
whose union is the fixed support of a fixed permutation of type `rho`: it is the
coefficient of that basis partial permutation in the product.  IK Prop. 6.3 gives
finiteness (`|rho|<=|sigma|+|tau|`), and Remark 6.4 gives the top disjoint-support
term with binomial multiplicity.

IK Thm. 9.1 then proves, rather than assumes, the map
`F(A_rho)=p_rho^#/z_rho` is an algebra isomorphism.  It evaluates both sides on
each Young diagram through the central-character action after forgetting support:
`psi(A_{rho;n})=binom(n-|rho|+m_1(rho),m_1(rho)) C_{rho;n}`.  The factor is
exactly what turns this eigenvalue into `p_rho^#/z_rho`; normalized irreducible
central characters are multiplicative.  Hence

`f^rho_{sigma,tau}=(z_sigma z_tau/z_rho) g^rho_{sigma,tau}`,

which is IO Prop. 4.5 with no unexplained imported assertion.  IO Prop. 4.7’s
cycle/support argument proves every `J`-filtration inequality; for `J=N`, IO
Prop. 4.9 gives
`p_sigma^# p_tau^#=p_{sigma union tau}^# + terms of strictly smaller
|rho|+ell(rho)`, and Prop. 4.10 identifies that with the profile-moment weight
filtration.  `thm-shifted-character-basis-and-weight-filtration` is therefore
proof-closed once its source locator is amended to include IK §2--6, §9 and its
proof route writes these four steps.

Two exact normalizations must be added before the CLT items are authored:

* For `rho` of size `r`, `p_rho^#(lambda)=(n downarrow r)
 chi^lambda_{rho union 1^{n-r}}/dim(lambda)` for `n=|lambda|>=r`, and zero
  otherwise.  The profile moment is
  `tilde p_k[omega]=-k integral x^{k-1}((omega-|x|)/2)' dx` for `k>=2`;
  scaling gives `tilde p_k[bar lambda]=n^{-k/2} tilde p_k(lambda)`.
* In the localization adjoining `(p_1^#)^(1/2)`, define
  `eta_rho=p_rho^#/((p_1^#)^(m_1(rho)/2)
  product_{k>=2}(k(p_1^#)^k)^(m_k(rho)/2))`.  It has Kerov degree zero and
  `eta_k=p_k^#/(sqrt(k)(p_1^#)^(k/2))`.  IO Prop. 4.12 gives
  `p_{(k^m)}^#p_k^#=p_{(k^{m+1})}^#+km p_{(k^{m-1},1^k)}^#+lower Kerov degree`.
  Dividing by the displayed factors is exactly the recurrence
  `x H_m=H_{m+1}+mH_{m-1}`.  IO Prop. 6.3 then gives
  `eta_rho=product_{k>=2}H_{m_k(rho)}(eta_k)+` strictly negative-degree terms.

Thus the Hermite and character CLT rows are also unblocked, subject to retaining
their genuine probability prerequisites.  IO Prop. 5.1 proves the expectation
formula by the regular character.  IO Thm. 5.4 uses the weight filtration,
expectation polynomials, and Chebyshev for moment convergence; Thm. 5.5 then
requires compact support with high probability plus Lemma 5.7’s topology result.
The planned RSK union bound is a valid local replacement for IO’s Hammersley
citation: for `L=C sqrt(n)`,
`P(LIS>=L)<=binom(n,L)/L! <=(e^2 n/L^2)^L`, which tends to zero for `C>e`, and
the same holds for the first column.  For
`sigma=(bar lambda-|x|)/2`, the Lipschitz constant is one; IO Lemma 5.7 then
identifies polynomial-moment and uniform topologies on the fixed compact-support
class.  State the endpoint precisely as uniform convergence **in probability**.

Finally, IO Thm. 6.1 is finite-dimensional joint weak convergence: for each
fixed `N`, `(p_k^#/(sqrt(k)n^{k/2}))_{2<=k<=N}` converges to independent
standard normals, equivalently unscaled coordinates have independent centered
Gaussian variances `k`.  IO Prop. 6.4 invokes moment determinacy; the scaffold’s
generic multivariate moment theorem must include tightness plus uniform
integrability (or retain its stated Prokhorov/Markov proof), not merely pointwise
formal moments.  No infinite-dimensional process convergence is claimed by this
item.

## Integration disposition

The source gate is now clear for the Murnaghan proof and for shifted-character
multiplication.  Before integration, repair the two absent JSON items, the
reduced-coefficient ordering, the SYMR-13/SYMR-14 cycle, the omitted FI
stability-degree joint, and the omitted IK locator/eta normalization.  Keep the
open-problem boundary: neither these proofs nor the cited reductions give a
general positive combinatorial rule for all Kronecker coefficients.
