# Batch 26 scope repair: punctured-disc Nevanlinna claims

## Result

Batch 26 now contains the promised local Second Main Theorem on a punctured disc, with a genuine exterior-domain proof route and an exact radius/error statement. The valid Schottky-based exterior extension lemma remains in place as an independent Picard proof; it does not stand in for the new SMT.

The manifest has 14 A items and 7 B items. The seven B entries are the six plan-listed IDs plus retained `ex-five-value-bound-is-sharp`, whose existing claim was preserved. The item inventory (IDs, kinds, and titles) remains frozen. On root's instruction, the post-baseline owner scaffold adds an explicit Countable Choice qualifier to the local SMT statement; this corrects an omitted foundational hypothesis without changing its mathematical content or the immutable pre-author baseline.

## Changed batch interface

- Root authorized one post-baseline statement amendment: add “Assume Countable Choice.” to the local theorem’s first sentence because its exceptional-set measure and regular-circle selection use the declared Countable Choice interface. The full before/after statements are recorded in the final audit section below; the pre-author baseline file remains unchanged.
- Added `thm-local-second-main-theorem-on-a-punctured-disc`, titled “The local Second Main Theorem on a punctured disc,” immediately before `cor-nevanlinna-picard-theorems`.
- The local theorem uses (F(w)=f(z_0+\rho/w)), normalized exterior characteristic (T_{\rm ext}), reduced exterior counts, error (O(\log^+T_{\rm ext}(R,F)+\log R)), and exceptional set (E\) of finite linear measure in the exterior radius (R). The puncture radius is exactly (s=\rho/R), and the image of (E) has finite measure with Jacobian (\rho/R^2).
- Added the local SMT as a direct supplier of the Picard corollary. Its Picard proof now states the characteristic growth bridge. The independent `lem-nevanlinna-exterior-three-value-extension` stays available as a normal-family proof.
- Added all six plan-listed B IDs. The Hayman lacunary item is now `cex-nevanlinna-error-bound-without-exceptional-radii` of kind `counterexample`; the existing power-map, exponential omissions/defects/sharpness, sine ramification, and four-value counterexample claims are retained under the updated examples. `ex-five-value-bound-is-sharp` remains as a seventh item.
- The page requires `the-riemann-sphere-and-mobius-transformations`, `bloch-schottky-and-picard`, and `normal-families-and-montels-theorem`, plus `isolated-singularities-and-laurent-series`, `complex-power-series-and-analytic-functions`, `complex-differentiability-and-cauchy-riemann`, `the-complex-exponential-and-eulers-formula`, and `the-inverse-function-theorem-completed` for the newly declared Picard Laurent/log suppliers; its previous CA-NV-1 and measure prerequisites remain. Its local theorem declares the argument-principle winding/preimage suppliers, the pointwise ramification identity, and `thm-nevanlinna-second-main-theorem` solely for its partial-fraction/ramification proof template. The global plane SFT estimate itself is not applied to the puncture. The actual exterior logarithmic-derivative supplier is Lund–Ye Theorem A2.

The Picard corollary now explicitly depends on `thm-laurent-expansion-annulus`, `thm-laurent-regular-principal-decomposition`, `thm-laurent-coefficient-formula-and-uniqueness`, `thm-termwise-differentiation-of-complex-power-series`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-complex-exponential-surjects-onto-the-punctured-plane`, and `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant` for its Laurent logarithm construction.

## Exterior characteristic and proof route

Choose a regular inner circle (|z-z_0|=\rho) and invert by (w=\rho/(z-z_0)). For each finite target (a), the local proof derives annular Jensen directly from the in-run argument-principle winding and preimage-counting items:

\[
M_a(R)-M_a(1)=k_a\log R+N_{\rm ext}(R,a;F)-N_{\rm ext}(R,\infty;F),
\quad k_a=\frac1{2\pi i}\int_{|w|=1}\frac{F'(w)}{F(w)-a}\,dw.
\]

This exact fixed-inner-circle term is retained as an (O(\log R)) contribution in the exterior First Main Theorem. After finite-target Möbius normalization, Lund–Ye’s exterior logarithmic-derivative estimate applies to (G) and each (G-c_j) outside a finite-linear-measure set in the exterior variable (R). Repeating the existing partial-fraction/ramification reduction with those exterior suppliers yields the truncated (q-2) SFT. The proof does not use the plane Poisson–Jensen estimate or plane logarithmic-derivative lemma as if their domains included the puncture.

With three omitted targets, the local SFT forces (T_{\rm ext}=O(\log R)) on good radii. The annular Jensen formula gives (T_{\rm ext}(R)+C_0\log R) nondecreasing for fixed boundary data. Every interval ([R,R+1]) eventually contains a good radius because the exceptional set has finite tail measure, so the bound extends to all radii. A target Möbius map makes the exterior function (G) holomorphic and zero-free. The integer winding on a regular inner circle permits a logarithm of (G/w^m); splitting its Laurent series gives (G=\Phi u), with (u) meromorphic on the plane and (\Phi) nonzero and holomorphic at infinity. The plane characteristic of (u) is (O(\log R)), hence (u) is rational by the existing growth-characterization item. Therefore (G) extends at infinity, contradicting the essential singularity. This is the explicit bridge from the circular exterior SMT to Great Picard.

For the finite-target reduction, after choosing regular rho, choose finite b outside both the target set and the compact inner-circle image F({|w|=1}), then choose a Möbius map M with pole preimage b and put G=M∘F; then every selected image target is finite. The pole divisor of G is exactly the b-divisor of F, and m_ext(R,∞;G)=m_ext(R,b;F)+O(1). Applying the directly derived annular FMT at b gives T_ext(R,G)=T_ext(R,F)+O(log R); applying it at each finite target gives T_ext(R,G-c_j)=T_ext(R,G)+O(log R). Möbius maps preserve target divisors with multiplicity. Lund–Ye A2 is then applied to G and each G-c_j, with a finite union of exceptional sets. This is the explicit local characteristic comparison; no plane rational-composition law is imported.

The Great Picard Laurent factorization names its suppliers and records the actual logarithm construction. For W=G/w^m, the regular inner-circle winding is zero, so the Laurent coefficient of w^(-1) in W'/W is zero. The coefficient formula and uniqueness, Laurent annulus expansion, and regular/principal decomposition split W'/W into positive and negative powers; termwise integration gives a primitive H=H_++H_- where H_+ is entire and H_- is analytic at infinity. Since W'=H'W, differentiation and the exponential derivative theorem show W exp(-H) has zero derivative; connectedness makes it a nonzero constant, and surjectivity of exp onto C* absorbs that constant into H. Thus G=w^m exp(H_+)Phi with Phi=exp(H_-) nonzero and analytic at infinity. The factor Phi and its reciprocal are bounded near infinity, while u=w^m exp(H_+) can have only a pole at 0, so T(r,u)=T_ext(r,G)+O(log r). If u is constant, G extends at infinity directly; otherwise the plane rational-characteristic criterion applies and makes u rational. Either case contradicts an essential singularity at infinity.

## Source audit

- **Lund–Ye:** Mark Lund and Zhuan Ye, “Nevanlinna theory of meromorphic functions on annuli,” *Science China Mathematics* 53(3) (2010), 547–554, DOI 10.1007/s11425-010-0037-3; full text `/tmp/lund-ye-annuli.pdf` (8 pages, 185,788 bytes, SHA-256 prefix `8648c790f814b66d`). Definition A is on printed p. 549. Theorem A1 on p. 551 gives the fixed-inner-boundary (O(\log R)) FMT scale. Theorem A2 on p. 552 gives the genuine one-sided exterior logarithmic-derivative estimate outside a set of finite linear measure in (R). The survey does not print a standalone exterior SFT; the local proof derives it from A2, annular Jensen, and the partial-fraction/ramification argument. Its displayed mean omits a (1/(2\pi)) factor, so the manifest fixes normalized means and proves the needed FMT directly instead of inheriting the displayed normalization.
- **Kondratyuk:** A. A. Kondratyuk, “Meromorphic functions with several essential singularities,” arXiv:0807.1247v1, full text `/tmp/frontier-37-annular-nevanlinna.pdf`. The two-parameter annular Jensen/FMT treatment includes punctured-disc annuli but does not itself provide the needed SMT.
- **Quang:** Si Duc Quang, “Meromorphic functions on annuli sharing finite sets with truncated multiplicity,” arXiv:2202.09523v2, Theorem 2.2, printed p. 5; full text `/tmp/arxiv-2202.09523.pdf`. Its domain is (A(R_0)=\{1/R_0<|z|<R_0\}), a symmetric annulus, not the one-sided exterior domain after puncture inversion. It is recorded out of scope.
- **Eremenko:** *Lectures on Nevanlinna Theory*, full text `/tmp/nevanlinna-eremenko.pdf`, §5 printed pp. 12–13 gives a unit-disc SMT for maps on the full disc near its boundary; this does not cover an interior essential singularity.
- **Goldberg–Ostrovskii:** *Value Distribution of Meromorphic Functions*, full text `/tmp/nevanlinna-GO.pdf` (text extraction `/tmp/nevanlinna-GO.txt`), Ch. 1 §5 printed pp. 23–28 defines the Tsuji characteristic; Ch. 3 §3, pp. 108–112, gives Tsuji log-derivative/SFT results. They are on the logarithmic cover, with errors and exceptional sets in the covering radius. No conversion to Euclidean puncture radii or circular exterior growth is claimed.
- **Simonič:** Aleksander Simonič, *The Ahlfors lemma and Picard’s theorems*, arXiv:1506.07019v1; full text `/tmp/simonic-ahlfors-picard.pdf`. §5.3 Theorem 11, printed p. 13, supplies the Schottky bound for the retained exterior extension lemma; §5.4 Theorems 13–14, pp. 14–15, give a normal-family comparison. The deterministic diagonal extraction is reconstructed locally rather than importing general Montel/Arzelà–Ascoli suppliers.

The coverage file records the Eremenko unit-disc result and Quang’s symmetric-annulus result as out of scope, the Tsuji statements as a distinct covering-radius alternative, the exact Lund–Ye exterior suppliers, and the corrected Simonič evidence for the exterior extension lemma.

## Checks and plan integration

- Coverage: 58 harvested results, no errors or warnings.
- Full-text source fetch: 7/7 sources verified and resolved.
- Batch manifest dependencies: 21 items, no missing IDs or cycles.
- Content policy: 21 items, no errors or warnings.
- Whole-run dependency levels: 808 items across 60 pages, maximum level 31, no label mismatch after the concurrent pair inventories and this batch’s new dependencies; no batch-26 level changed.
- Cross-batch dependencies remain empty.

The parent owns canonical plan changes. The plan still needs the new A ID/title inserted before the Picard corollary, the three earlier direct A-page requirements plus the five Laurent/log supplier pages listed above, and—if its B inventory is closed—the retained `ex-five-value-bound-is-sharp` added as a seventh B item. No shared plan prose or readiness records were edited here. No engine transition, retry, dispatch, or cross-batch ledger update was issued.

The checked peer-reviewed survey does not print the exterior SFT as a named theorem; this batch’s local SFT is an explicit derivation from the exterior logarithmic-derivative estimate, the exact annular Jensen boundary term, the local Möbius-characteristic comparison, and the existing partial-fraction/ramification proof template. The independent source researcher did not retrieve the Kondratyuk–Laine (2006) report, so whether it states a direct exterior result remains unverified; no theorem is attributed to it. The current local proof route does not rely on that report and remains subject to the scheduled independent mathematical review.

### Exact statement amendment

The pre-author baseline statement was:

> Let f be nonconstant meromorphic on 0<|z-z0|<r*, choose 0<rho<r* so the circle |z-z0|=rho contains no poles or preimages of the finitely many distinct targets a1,...,aq in the sphere, and put F(w)=f(z0+rho/w) for |w|>1. Define m_ext(R,infinity;F)=(1/(2 pi)) integral_0^{2 pi} log^+|F(Re^{i theta})| dtheta; N_ext(R,a;F)=integral_1^R n_ext(t,a;F) dt/t, where n_ext counts a-points in 1<|w|<=t with full multiplicity (poles for a=infinity); T_ext=m_ext(R,infinity)+N_ext(R,infinity), and bar N_ext uses each point once. There are C,R0 and a measurable E subset [R0,infinity) with finite linear measure such that for every R>=R0 outside E, (q-2)T_ext(R,F)<=sum_{j=1}^q bar N_ext(R,aj;F)+C(log^+T_ext(R,F)+log R). The exact local radius is s=rho/R; the image exceptional set {rho/R:R in E} has finite linear measure, bounded by rho R0^(-2)|E|.

The current owner scaffold statement is:

> Assume Countable Choice. Let f be nonconstant meromorphic on 0<|z-z0|<r*, choose 0<rho<r* so the circle |z-z0|=rho contains no poles or preimages of the finitely many distinct targets a1,...,aq in the sphere, and put F(w)=f(z0+rho/w) for |w|>1. Define m_ext(R,infinity;F)=(1/(2 pi)) integral_0^{2 pi} log^+|F(Re^{i theta})| dtheta; N_ext(R,a;F)=integral_1^R n_ext(t,a;F) dt/t, where n_ext counts a-points in 1<|w|<=t with full multiplicity (poles for a=infinity); T_ext=m_ext(R,infinity)+N_ext(R,infinity), and bar N_ext uses each point once. There are C,R0 and a measurable E subset [R0,infinity) with finite linear measure such that for every R>=R0 outside E, (q-2)T_ext(R,F)<=sum_{j=1}^q bar N_ext(R,aj;F)+C(log^+T_ext(R,F)+log R). The exact local radius is s=rho/R; the image exceptional set {rho/R:R in E} has finite linear measure, bounded by rho R0^(-2)|E|.

Only the explicit Countable Choice hypothesis was added. The radii, normalized characteristic, inequality, and exceptional-set transformation are otherwise identical. The immutable pre-author baseline was not rebased or changed.
