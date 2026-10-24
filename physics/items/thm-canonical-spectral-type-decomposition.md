---
id: thm-canonical-spectral-type-decomposition
kind: theorem
title: "Canonical decomposition into pure point, absolutely continuous and singular continuous parts"
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces, thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition, thm-finite-borel-measure-on-r-is-atomic-plus-atomless, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-projection-valued-measure, def-unbounded-integral-against-a-pvm, thm-bounded-borel-pvm-integral, def-mutually-singular-measures, def-absolutely-continuous-with-respect-to-a-positive-measure, def-atom-of-a-measure-on-r, def-orthogonality-and-orthogonal-complement, thm-lebesgue-measure-of-a-box-of-every-kind, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 3.3, Lemmas 3.15-3.18 with proof, pp.117-119"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $T$ be a self-adjoint operator on a complex Hilbert space H with spectral
projection valued measure $E$ on $\mathbb R$ and let $H_{\mathrm{pp}}$,
$H_{\mathrm{ac}}$, $H_{\mathrm{sc}}$ be the subspaces of
[[def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces]].
Then $H_{\mathrm{pp}},H_{\mathrm{ac}},H_{\mathrm{sc}}$ are closed, mutually
orthogonal, $T$-reducing subspaces with
$$H=H_{\mathrm{pp}}\oplus H_{\mathrm{ac}}\oplus H_{\mathrm{sc}},$$
canonically determined by $T$; the restrictions of $T$ to them are
self-adjoint and their spectral measures are respectively purely atomic,
absolutely continuous with respect to Lebesgue measure, and atomless and
singular. If $H$ is separable and $\mu$ is a maximal scalar spectral measure
with disjoint Borel supports $B_{\mathrm{pp}},B_{\mathrm{ac}},B_{\mathrm{sc}}$
of its discrete, absolutely continuous and singular continuous parts, then
$H_{\mathrm{type}}=\operatorname{ran}E(B_{\mathrm{type}})$.

Here a support means a Borel carrier (zero mass off the set), not necessarily topological support. A maximal scalar spectral measure is a finite positive Borel measure mu with $E_x\ll\mu$ for every x (in particular a scalar spectral measure with this domination property qualifies). The last assertion is conditional on the supplied mu. On the zero Hilbert space use the unique PVM and full-domain zero operator directly.

## Facts & Assumptions

[A1] The three types are defined by the scalar measures $E_x(B)=\|E(B)x\|^2$: discrete means concentrated on a countable set, absolutely continuous means vanishing on Lebesgue-null Borel sets, and singular continuous means atomless and carried by a Lebesgue-null Borel set. [[def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces]] [[def-absolutely-continuous-with-respect-to-a-positive-measure]] [[def-mutually-singular-measures]] [[def-atom-of-a-measure-on-r]]

[A2] Each finite positive Borel measure on the line has a unique decomposition into discrete, absolutely continuous and atomless singular measures. Its atoms form a countable set. Lebesgue measure gives zero mass to a singleton, hence to a countable set by countable subadditivity. [[thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition]] [[thm-finite-borel-measure-on-r-is-atomic-plus-atomless]] [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[A3] E is a regular PVM, its projection values commute and satisfy E(B)E(C)=E(B intersect C), and each is contractive and self-adjoint. Orthogonality uses the first-linear inner product. [[def-projection-valued-measure]] [[def-orthogonality-and-orthogonal-complement]] [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

[A4] $D(T)=\{x:\int\lambda^2dE_x<\infty\}$ and $Tx=\lim_n\Phi_E(\lambda1_{[-n,n]})x$. Bounded integrals are operator-norm limits of integrals of uniform simple approximations. Conversely the integral of the real coordinate against a regular PVM is self-adjoint on this domain. [[def-unbounded-integral-against-a-pvm]] [[thm-bounded-borel-pvm-integral]] [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

[A5] AC supplies the measure-decomposition and spectral interfaces and directly supplies the countable choices of null carriers and all dependent or countable witness choices used below. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

**Given:** AC, a complex Hilbert space H, and self-adjoint T with its regular spectral PVM E; use the direct zero-space convention when needed.

1.1 For any finite measure nu, take its decomposition [A2]. Let P be the countable set of atoms, carrying the discrete part, and choose a Lebesgue-null Borel carrier N for the singular continuous part. The three disjoint Borel sets $S_{pp}=P$, $S_{sc}=N\setminus P$, $S_{ac}=\mathbb R\setminus(P\cup N)$ partition the line and carry their corresponding parts: both atomless parts vanish on P, the absolutely continuous part vanishes on P union N, and the discrete part vanishes off P. Thus $\nu|_{S_r}=\nu_r$ for each type r. More generally, for any disjoint carriers S_r of the three components, their union carries nu and the same restriction identity holds. If eta<<nu is finite positive, its restrictions to these carriers are of the respective types: they are dominated in the sense of null sets by nu_r, so inherit a countable carrier, Lebesgue absolute continuity, or a null carrier and zero singleton masses. They sum to eta, so uniqueness in [A2] implies eta has type r exactly when eta is carried by S_r. The zero measure has all three types, consistently with this assertion. [A1, A2, A5]

1.2 For every Borel B, [A3] gives $E_{x+y}(B)\le2E_x(B)+2E_y(B)$ and $E_{cx}(B)=|c|^2E_x(B)$. Consequently each type set is linear: two countable carriers have countable union, two null carriers have null union, and zero masses on null sets or singletons pass through this inequality. If x_n of one type converge to x, the contraction inequality $\|E(B)(x-x_n)\|\le\|x-x_n\|$ shows E_x(B)=0 whenever all E_{x_n}(B)=0. For the discrete case choose countable carriers P_n and use their countable union P; then E_x(P^c)=0. For the singular case choose null Borel carriers N_n and use their null union N. For the atomless condition apply the same argument to each singleton; for absolute continuity apply it to each fixed Lebesgue-null Borel set. Hence all three subspaces are closed. The countable carrier choices and countable unions use the declared AC [A5]. [A1, A2, A3, A5]

2.1 Measures of different types are mutually singular: a discrete carrier is countable and both other types give it zero mass; a singular-continuous null carrier has zero absolutely continuous mass. Thus for x,y of different types there is a Borel S carrying E_x with E_y(S)=0. Since $\|E(S^c)x\|^2=E_x(S^c)=0$, one has E(S)x=x, while E(S)y=0. Self-adjointness of E(S) yields $\langle x,y\rangle=\langle E(S)x,y\rangle=\langle x,E(S)y\rangle=0$. [A1, A2, A3, step 1.2]

3.1 For arbitrary x, apply step 1.1 to E_x and set x_r=E(S_r)x. The PVM identities give $E_{x_r}(B)=\|E(B)E(S_r)x\|^2=E_x(B\cap S_r)$, so x_r belongs to the indicated type. The partition gives $x=x_{pp}+x_{ac}+x_{sc}$. By step 2.1 this decomposition is orthogonal and unique. The component maps Q_r are linear by uniqueness, contractive by the Pythagorean identity for this finite orthogonal sum, and self-adjoint because $\langle Q_rx,y\rangle=\langle x_r,y_r\rangle=\langle x,Q_ry\rangle$. They are orthogonal projections onto the closed type subspaces. As these subspaces were defined from E_x, they and the projections are canonical, independent of the carriers chosen for individual vectors. [A1, A3, step 1.1, step 1.2, step 2.1]

4.1 For each Borel B the equality $E_{E(B)x}=E_x|_B$ shows that E(B) preserves each type. Applying it to the unique decomposition in step 3.1 yields Q_r E(B)=E(B)Q_r. Therefore $E_{Q_rx}(B)=\|Q_r E(B)x\|^2\le E_x(B)$, so x in D(T) implies Q_rx in D(T) by [A4]. Commutation with every E(B) gives commutation with every simple integral and then every bounded integral by [A4]. Passing to the coordinate truncation limit gives TQ_rx=Q_rTx for x in D(T). Thus each type subspace reduces T, with its domain carried along. [A3, A4, step 3.1]

4.2 In the separable clause let the supplied finite maximal measure mu have disjoint carriers B_r of its three components. For every x, E_x<<mu, so step 1.1 says x has type r exactly when E_x(B_r^c)=0. The latter is equivalent to E(B_r)x=x, since E(B_r^c)=I-E(B_r) and $E_x(B_r^c)=\|E(B_r^c)x\|^2$. Hence H_r=ran E(B_r). This proves the assertion for every supplied maximal mu, not just for a specially constructed one, and needs no circle-to-line transport. [A1, A3, step 1.1, step 3.1]

5.1 On a nonzero type subspace K, E_K(B)=E(B)|_K is a regular PVM: its projection and strong countable-additivity properties restrict from E, and its scalar measures are the same regular E_x for x in K. The coordinate integral against E_K has domain K intersect D(T); bounded simple integrals and their limits agree with the restrictions of those for E, so its value is Tx. The converse spectral theorem in [A4] makes this restriction self-adjoint. On K={0}, self-adjointness is direct since its unique densely defined operator equals its adjoint. The scalar measures of each restriction have exactly the specified type by [A1]. [A1, A3, A4, step 3.1, step 4.1]

6.1 If H={0}, every scalar measure is zero, the three subspaces are {0}, and all conclusions including the carrier formula hold directly. Vanishing components on a nonzero H also give zero subspaces by the same arguments, and no measure is divided by its mass. Nonseparability causes no difficulty in the preceding arguments, since only a single scalar measure or a sequence of vectors is used at a time. Full AC is used exactly as in [A5], including countable carrier choices for closedness. [A5, step 1.1, step 1.2, step 3.1, step 5.1, step 4.2] ∎



## Source notes

Teschl, Section 3.3, Lemma 3.18, printed pp.118–119, gives the canonical type spaces and their spectral projections from maximal-measure carriers. The direct scalar-measure argument here proves the decomposition without a separability assumption; the maximal-measure carrier formula is asserted conditionally as in the statement. No change-of-variables or Cayley transport is needed.
