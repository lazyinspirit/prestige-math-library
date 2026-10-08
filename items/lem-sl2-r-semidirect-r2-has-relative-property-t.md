---
status: draft
id: lem-sl2-r-semidirect-r2-has-relative-property-t
kind: lemma
title: Relative property (T) for SL2(R) semidirect R2
deps:
  - def-relative-property-t-for-a-pair
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-hilbert-space
  - def-topological-group
  - def-product-topology
  - thm-product-universal-property
  - def-continuous-map-top
  - lem-algebra-of-continuous-real-maps-on-a-space
  - def-determinant-of-a-square-matrix
  - def-real-projective-line-and-its-sl2-action
  - cor-rn-is-locally-compact-and-sigma-compact
  - thm-metric-hausdorff-separation
  - thm-locally-compact-hausdorff-basics
  - thm-rational-points-and-boxes-in-rn
  - prop-second-countability-is-hereditary
  - thm-countable-products-of-second-countable-spaces
  - thm-second-countable-implies-separable
  - def-second-countable-space
  - def-separable-space
  - def-external-semidirect-product
  - thm-external-semidirect-product-is-a-group
  - def-pontryagin-dual-and-compact-open-topology
  - lem-continuous-characters-of-the-real-line-are-exponentials
  - thm-heine-borel-r
  - lem-duals-of-finite-products-and-discrete-direct-sums
  - def-projection-valued-measure
  - lem-scalar-and-complex-measures-from-a-pvm
  - thm-bounded-borel-pvm-integral
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-real-and-complex-inner-product-space
  - lem-spectral-measure-of-a-representation-of-an-abelian-lch-group
  - def-borel-sigma-algebra
  - def-measure
  - def-probability-measure
  - def-integrable-real-and-complex-functions-and-their-integrals
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-weak-convergence-of-borel-probability-measures
  - lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
  - thm-rmk-uniqueness-among-radon-measures
  - def-dependent-choice
  - def-compact-space
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-continuous-function-of-positive-type
  - lem-diagonal-unitary-coefficients-have-positive-type
  - thm-gns-construction-for-topological-groups
  - lem-sl2-r-has-no-invariant-probability-on-the-projective-line
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC. It selects the set-indexed coefficient functions in Proof 1.2, supplies the GNS, spectral-measure and compact-metric subsequence interfaces, yields Countable Choice for second-countable separability and Hilbert/PVM prerequisites, and implies DC for regular-measure uniqueness in F7. The proof chooses no family from the class of representations and uses no additional choice in the rational-point or projective arguments."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Theorem 1.4.5 and complete proof, printed pp. 48–49; Proposition 1.4.12 and Corollary 1.4.13, printed pp. 53–54: a full alternative invariant-mean proof of relative (T) for SL2(K)⋉K², including K=R. The local proof below follows the PVM/projective-limit route."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups (complete notes with exercise sheets)"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Exercises for the PCMI Summer School, §2 III.1–III.5, printed pp. 3–4/PDF pp. 33–34: the PVM, probability-displacement, weak-limit and projective-line steps are posed for SL2(Z)⋉Z²; no solutions are supplied there. The real case is proved locally."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$K=\mathrm{SL}_2(\mathbb R)$ with its matrix subspace topology and let
$V=\mathbb R^2$ with its usual additive topology. Write
$G=K\ltimes V$ for the group on $K\times V$ with product topology and
multiplication $(k,v)(k',v')=(kk',v+k v')$; this is the coordinate-swapped
form of the external semidirect product ([[def-external-semidirect-product]],
[[thm-external-semidirect-product-is-a-group]]). Let
$N=\{(I,v):v\in V\}$ be the translation subgroup. Put
$u_+=\begin{pmatrix}1&1\\0&1\end{pmatrix}$,
$u_-=\begin{pmatrix}1&0\\1&1\end{pmatrix}$, and
$Q_0=\{(u_+,0),(u_+^{-1},0),(u_-,0),(u_-^{-1},0)\}$. Then there is
$\varepsilon_0\in(0,1]$ such that every strongly continuous unitary
representation $(\pi,H)$ of $G$ having a $(Q_0,\varepsilon_0)$-invariant unit
vector ([[def-almost-invariant-vectors-for-a-unitary-representation]]) has a
nonzero $N$-invariant vector. In particular, $(G,N)$ has relative property
(T) ([[def-relative-property-t-for-a-pair]]).

## Facts & Assumptions

**Given:** AC; $K=\mathrm{SL}_2(\mathbb R)$; $V=\mathbb R^2$; the product-topology semidirect group $G=K\ltimes V$; its translation subgroup $N$; and the set $Q_0$.

[F1] Euclidean $\mathbb R^n$ is locally compact Hausdorff and has a countable rational-box basis. The determinant is a continuous polynomial in matrix coordinates, so $K$ is a closed subspace of $\mathbb R^4$; closed subspaces of LCH spaces are locally compact, and second countability passes to subspaces. AC supplies Countable Choice for countable products and second-countable separability ([[cor-rn-is-locally-compact-and-sigma-compact]], [[thm-metric-hausdorff-separation]], [[thm-locally-compact-hausdorff-basics]], [[thm-rational-points-and-boxes-in-rn]], [[def-determinant-of-a-square-matrix]], [[lem-algebra-of-continuous-real-maps-on-a-space]], [[prop-second-countability-is-hereditary]], [[thm-countable-products-of-second-countable-spaces]], [[thm-second-countable-implies-separable]], [[def-second-countable-space]], [[def-separable-space]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] In the coordinate order $V\times K$, the external semidirect-product law is $(v,k)(v',k')=(v+k v',kk')$. The coordinate swap gives the stated $K\times V$ product; the matrix action, multiplication and inversion are continuous, and $N=\{I\}\times V$ is a closed normal subgroup ([[def-external-semidirect-product]], [[thm-external-semidirect-product-is-a-group]], [[def-product-topology]], [[thm-product-universal-property]], [[def-continuous-map-top]], [[lem-algebra-of-continuous-real-maps-on-a-space]], [[def-real-projective-line-and-its-sl2-action]]).

[F3] For a second-countable LCH abelian $N$, a second-countable LCH group $K$ acting continuously on $N$, and a separable Hilbert space with a strongly continuous covariant representation of $N\rtimes K$, there is a unique regular PVM $E$ on $\widehat N$ with the integrated representation formula and covariance under the dual action ([[lem-spectral-measure-of-a-representation-of-an-abelian-lch-group]], [[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]], [[def-pontryagin-dual-and-compact-open-topology]]).

[F4] Every continuous character of $\mathbb R$ is uniquely $t\mapsto e^{2\pi i\xi t}$. This parametrization is a homeomorphism for the compact-open topology. For forward continuity, $(\xi,t)\mapsto e^{2\pi i\xi t}$ is jointly continuous: real multiplication is continuous and $u\mapsto e^{2\pi iu}$ is continuous by the character supplier. Given compact $C$ and tolerance $\eta>0$, product neighbourhoods at $(\xi_0,t)$ make $|e^{2\pi i\xi t'}-e^{2\pi i\xi_0t'}|<\eta$; a finite subcover in $t$ and the intersection of its parameter neighbourhoods give uniform approximation on $C$. For inverse continuity, given $\delta>0$, use the compact interval $[-1/(2\delta),1/(2\delta)]$. If $|\xi-\xi_0|\ge\delta$, its point $t=1/(2|\xi-\xi_0|)$ gives $e^{2\pi i(\xi-\xi_0)t}=-1$, so the two characters differ by $2$ there. The dual of a finite product is the product of the duals topologically, hence $\widehat{\mathbb R^2}\cong\mathbb R^2$ by $\xi\mapsto\chi_\xi(y)=e^{2\pi i\xi\cdot y}$. The dual action of $k$ is $\xi\mapsto(k^{-1})^T\xi$ ([[lem-continuous-characters-of-the-real-line-are-exponentials]], its Proof 7.1 for $e^{\pm\pi i}=-1$; [[thm-heine-borel-r]], [[lem-algebra-of-continuous-real-maps-on-a-space]], [[lem-duals-of-finite-products-and-discrete-direct-sums]], [[def-pontryagin-dual-and-compact-open-topology]]).

[F5] Inner products are linear in the first variable; for a PVM, $\mu_\xi(B)=\langle E(B)\xi,\xi\rangle$ is a positive countably additive measure of mass $\|\xi\|^2$, and bounded Borel functions act through the PVM integral with contractive projection values ([[def-real-and-complex-inner-product-space]], [[def-projection-valued-measure]], [[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-bounded-borel-pvm-integral]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

[F6] The projective map $\Phi(y)=[y]$ from $\mathbb R^2\setminus\{0\}$ is continuous, and $P^1(\mathbb R)$ is compact metrizable with continuous projective action; no probability is invariant under two nonidentity unipotents with distinct fixed lines ([[def-real-projective-line-and-its-sl2-action]], [[def-borel-sigma-algebra]], [[def-measure]], [[def-probability-measure]], [[lem-sl2-r-has-no-invariant-probability-on-the-projective-line]]).

[F7] The circle is second countable as a subspace of $\mathbb R^2$ by [F1]; its homeomorphic projective line in [F6] is therefore second countable too (transport the countable basis along the homeomorphism). Every sequence of Borel probabilities on a compact metric space has a weakly convergent subsequence under AC; weak convergence tests bounded continuous real functions. On a second-countable compact metric space finite Borel measures are regular, and regular measures agreeing on all continuous functions are equal under DC, which follows from AC ([[lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences]], [[def-weak-convergence-of-borel-probability-measures]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]], [[thm-rmk-uniqueness-among-radon-measures]], [[def-dependent-choice]], [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F8] For bounded measurable functions, integrals are linear, and $|\int h\,d\mu|\le\|h\|_\infty$ for a probability measure; this follows from the simple-function definition, order and scalar rules, and the L1 linearity theorem ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F9] AC selects from any set-indexed family of nonempty sets ([[def-axiom-of-choice]]). The coefficient functions below lie in subsets of the set $\mathbb C^G$, so no choice from a class of representations is used.

[F10] A normalized continuous positive-type coefficient has a strongly continuous cyclic GNS representation with the same coefficient and a unit cyclic vector ([[def-continuous-function-of-positive-type]], [[lem-diagonal-unitary-coefficients-have-positive-type]], [[thm-gns-construction-for-topological-groups]]). The comparison with a witness representation is proved directly in step 3.1.

[F11] Every finite subset of a topological space is compact ([[def-compact-space]]).

[F12] Almost invariance tests every compact subset and every positive tolerance, and a relative Kazhdan pair forces a nonzero invariant vector for each witnessing unit vector ([[def-almost-invariant-vectors-for-a-unitary-representation]], [[def-relative-property-t-for-a-pair]]).

## Proof

Bekka–de la Harpe–Valette prove the same relative-(T) conclusion for $K=\mathbb R$ as a local field by a different route: Theorem 1.4.5 reduces it to uniqueness of an invariant mean on the dual, Proposition 1.4.12 proves that uniqueness, and Corollary 1.4.13 states the pair result. The proof below supplies the assigned PVM and projective-limit argument. Breuillard's Exercises III.1–III.5 give this strategy for the discrete pair $\mathrm{SL}_2(\mathbb Z)\ltimes\mathbb Z^2$ but leave the steps as exercises.

**Proof technique:** choose coefficient functions by AC, form GNS representations, and push their covariant PVM probabilities to the compact projective line.

1.1 The matrix group $K$ is the determinant-one closed subset of $\mathbb R^4$, so it is locally compact Hausdorff by [F1] and second countable by hereditary second countability. The additive group $V=\mathbb R^2$ has the same topological properties, and the finite product $K\times V$ is second countable. [F1, algebra]

1.2 Suppose no $\varepsilon_0\in(0,1]$ works. For each $m\ge1$, a strongly continuous representation without a nonzero $N$-invariant vector and a unit vector with $Q_0$-displacement less than $1/m$ then exist. Let $\mathcal F_m\subseteq\mathbb C^G$ be the set of all diagonal coefficient functions of such witnesses. Each $\mathcal F_m$ is nonempty and is a set; by AC choose $\varphi_m\in\mathcal F_m$. [F9, algebra]

1.3 Under the identification in [F4], the dual action is $k\cdot\xi=(k^{-1})^T\xi$. Thus the matrices acting on the dual for $u_+$ and $u_-$ are respectively $a_+=(u_+^{-1})^T=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$ and $a_-=(u_-^{-1})^T=\begin{pmatrix}1&-1\\0&1\end{pmatrix}$. [F4, algebra]

2.1 Under the coordinate swap in [F2], the stated multiplication is the external semidirect-product law. The action $(k,v)\mapsto kv$ is continuous because its coordinates are finite sums of products of matrix and vector coordinates; multiplication $(k,v)(k',v')=(kk',v+kv')$ and inversion $(k,v)^{-1}=(k^{-1},-k^{-1}v)$ are continuous. Conjugation gives $(k,v)(I,w)(k,v)^{-1}=(I,kw)$, so $N$ is normal; it is closed as $\{I\}\times V$ in the Hausdorff product. Thus $G$ is a topological group. [F2, step 1.1, algebra]

3.1 Let $(\pi_m,H_m,\eta_m)$ be the GNS triple of $\varphi_m$. For any witness $(\pi_m^w,H_m^w,\xi_m^w)$ realizing the coefficient $\varphi_m$, the map $\sum_g c_g\pi_m(g)\eta_m\mapsto\sum_g c_g\pi_m^w(g)\xi_m^w$ preserves inner products because both cyclic-vector coefficients equal $\varphi_m$; it is therefore a well-defined isometry of cyclic spans, extends to a unitary onto the witness's cyclic carrier, and intertwines the representations. That carrier has no nonzero $N$-invariant vector, so neither does the GNS representation; $\eta_m$ is a unit vector with $Q_0$-displacement less than $1/m$. Since its cyclic orbit map is continuous and $G$ is second countable, it has a countable dense subset by [F1], and rational complex linear combinations show $H_m$ is separable. [F1, F10, step 1.1, step 2.1, algebra]

4.1 Set $\rho_m(v)=\pi_m(I,v)$ for $v\in V$ and $\tau_m(k)=\pi_m(k,0)$ for $k\in K$. The semidirect law gives $\tau_m(k)\rho_m(v)\tau_m(k)^{-1}=\rho_m(kv)$. By [F1]–[F3], the spectral-measure lemma applies to $N=V$, $K=\mathrm{SL}_2(\mathbb R)$ and $H_m$: it gives a regular PVM $E_m$ on $\widehat V$ such that $\rho_m(v)=\int\chi(v)\,dE_m(\chi)$ and $\tau_m(k)E_m(B)\tau_m(k)^{-1}=E_m(k\cdot B)$. [F1, F2, F3, step 1.1, step 2.1, step 3.1]

5.1 For a vector $v$ invariant under all of $N$, let $\mu_v(B)=\langle E_m(B)v,v\rangle$. For every $q\in\mathbb Q^2$, the integrated PVM formula and [F5] give $0=\|\rho_m(q)v-v\|^2=\int_{\widehat V}|\chi(q)-1|^2\,d\mu_v(\chi)$. For each positive integer $r$, the Borel set $B_{q,r}=\{\chi:|\chi(q)-1|\ge1/r\}$ has measure zero, since the integrand is at least $r^{-2}$ there. Their countable union is $\{\chi:\chi(q)\ne1\}$, hence this set is null. The set $\mathbb Q^2$ is countable and dense by [F1]; intersecting the corresponding full-measure sets shows that $\mu_v$ is concentrated on characters trivial on $\mathbb Q^2$. Continuity of characters makes such a character trivial on $\mathbb R^2$, so under [F4] it is the point $0$. Consequently $\mu_v(\widehat V\setminus\{0\})=0$ and $\|E_m(\widehat V\setminus\{0\})v\|^2=\mu_v(\widehat V\setminus\{0\})=0$, so the projection identity and $E_m(\widehat V)=I$ imply $v=E_m(\{0\})v$. Conversely, the integrated formula shows every vector in $\operatorname{ran}E_m(\{0\})$ is $N$-invariant. Thus $\operatorname{ran}E_m(\{0\})=H_m^N$, which is zero by the choice of $\pi_m$. [F1, F4, F5, step 4.1, step 1.3, algebra]

6.1 Since $\eta_m$ is a unit vector, $\mu_m(B):=\langle E_m(B)\eta_m,\eta_m\rangle$ is a Borel probability; step 5.1 gives $\mu_m(\{0\})=0$. By [F4], identify $\widehat V\setminus\{0\}$ homeomorphically with $\mathbb R^2\setminus\{0\}$, then push forward under the continuous projective map $\Phi(y)=[y]$ to obtain a Borel probability $\nu_m$ on the compact metric space $P^1(\mathbb R)$. [F4, F5, F6, step 5.1]

7.1 Let $k\in\{u_+,u_-\}$ and let $B\subseteq\widehat V$ be Borel. Put $P=E_m(B)$ and $\zeta=\tau_m(k)\eta_m$. Since $P$ is a contractive projection, expansion in the first inner-product variable and Cauchy–Schwarz give $|\mu_\zeta(B)-\mu_{\eta_m}(B)|=|\langle P(\zeta-\eta_m),\zeta\rangle+\langle P\eta_m,\zeta-\eta_m\rangle|\le2\|\zeta-\eta_m\|<2/m$. Covariance gives $\mu_\zeta(B)=\mu_{\eta_m}(k^{-1}\cdot B)$; because $\Phi$ intertwines the dual action with the projective action of $k\cdot\xi=(k^{-1})^T\xi$, it follows for every Borel $A\subseteq P^1(\mathbb R)$ that $|\nu_m(k^{-1}\cdot A)-\nu_m(A)|<2/m$. [F3, F5, F6, step 3.1, step 4.1, step 1.3, step 6.1, algebra]

8.1 By [F7], pass to a subsequence $\nu_{m_j}$ converging weakly to a Borel probability $\nu$. Fix a continuous real $f$ and an approximation tolerance $\delta>0$; partition its bounded range into finitely many intervals of length at most $\delta$ to obtain a finite-valued Borel simple function $s=\sum_{l=1}^L c_l\mathbf 1_{A_l}$ with $\|f-s\|_\infty\le\delta$. For either projective map $a_+$ or $a_-$, step 7.1 bounds the difference of the integrals of $s$ against the pushed-forward and original $\nu_{m_j}$ by $(2/m_j)\sum_l|c_l|$, while [F8] bounds the two approximation errors by $2\delta$ in total. Taking $j\to\infty$, using weak convergence and continuity of the projective maps, gives $|\int f\,d(a_*\nu)-\int f\,d\nu|\le2\delta$; as $\delta$ is arbitrary, the integrals are equal. Both measures are regular by [F7], so the uniqueness theorem there implies $(a_+)_*\nu=\nu=(a_-)_*\nu$. [F6, F7, F8, step 1.3, step 7.1, algebra]

9.1 The matrices $a_+$ and $a_-$ in step 1.3 are nonidentity unipotents because each difference from $I$ is nonzero and square-zero; their fixed lines are respectively $\mathbb R(0,1)$ and $\mathbb R(1,0)$, which are distinct. Step 8.1 therefore contradicts [F6]. [F6, step 1.3, step 8.1, algebra]

10.1 The contradiction shows that some integer $m\ge1$ has no counterexample, so $\varepsilon_0=1/m\in(0,1]$ makes $(Q_0,\varepsilon_0)$ a relative Kazhdan pair for $(G,N)$. By [F11], $Q_0$ is compact; hence almost invariant vectors supply a $(Q_0,\varepsilon_0)$-invariant unit vector, and the pair conclusion gives relative property (T). [step 1.2, step 9.1, F11, F12] ∎
