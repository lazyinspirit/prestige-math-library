---
id: lem-euclidean-asd-subsequences-have-one-smooth-limit-away-from-concentration
kind: lemma
title: "One smooth Euclidean ASD limit away from finite concentration"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-euclidean-asd-energy-concentration-is-finite
  - lem-small-critical-curvature-coulomb-gauges-on-four-balls
  - lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover
  - lem-close-su-two-cocycles-admit-constructed-sobolev-isomorphisms
  - lem-weak-euclidean-asd-coulomb-connections-are-interior-smooth
  - lem-euclidean-asd-small-energy-curvature-bound
  - cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence
  - thm-higher-order-sobolev-embedding
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Katrin Wehrheim, Anti-self-dual instantons with Lagrangian boundary conditions, introduction, pp.3–4"
      url: "https://math.berkeley.edu/~katrin/papers/diss.pdf"
    - title: "Swarnendu Sil, Topology of weak G-bundles via Coulomb gauges in critical dimensions, full Theorem 32 proof, pp.24–27"
      url: "https://arxiv.org/pdf/1909.07308"
---

## Statement

Assume full AC. Let $\Omega\subset\mathbb R^4$ be open and let $A_n$ be smooth $\mathfrak{su}(2)$ connection forms with Euclidean $F_{A_n}^+=0$ and $\int_\Omega|F_{A_n}|^2\le M<\infty$. There are a subsequence, a finite concentration set $S\subset\Omega$, and a countable fixed ball cover $(U_i)$ of $\Omega\setminus S$ with the following properties.

There are local gauges $g_i^n$, smooth on $U_i$ and belonging to every finite $W^{2,p}(U_i)$, $p\ge2$, such that $a_i^n=(A_n)^{g_i^n}$ is Coulomb and
$$a_i^n\longrightarrow a_i\quad\text{in }C^\infty_{\mathrm{loc}}(U_i),\qquad h_{ij}^n=(g_i^n)^{-1}g_j^n\longrightarrow h_{ij}\quad\text{in }C^\infty_{\mathrm{loc}}(U_i\cap U_j).$$
The smooth limits $a_i,h_{ij}$ are chosen once on this whole countable cover. The maps $h_{ij}$ are $SU(2)$-valued and satisfy the cocycle identities pointwise, and $a_j=a_i^{h_{ij}}$ and $F_{a_i}^+=0$. In particular they define one smooth limiting transition cocycle with a compatible smooth ASD connection throughout $\Omega\setminus S$.

For every nonempty compact $K\subset\Omega\setminus S$, the same subsequence, after deleting finitely many terms depending on $K$, can be transferred on a neighborhood of $K$ to this fixed limiting cocycle by smooth local isomorphisms $\sigma_i^n\to I$ in $C^\infty_{\mathrm{loc}}$. The transferred forms $(a_i^n)^{\sigma_i^n}$ converge to $a_i$ in $C^\infty_{\mathrm{loc}}$ there. The set $S$ has the energy lower bound and cardinality bound of [[lem-euclidean-asd-energy-concentration-is-finite]].

No extension across $S$, bubble tree, energy quantization, general curved or singular metric, or identification with a chosen original bundle on all of $\Omega\setminus S$ is asserted.

## Statement references

[[lem-euclidean-asd-energy-concentration-is-finite|Constructed finite concentration set]]

[[lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover|Full local extraction proof]]

[[lem-close-su-two-cocycles-admit-constructed-sobolev-isomorphisms|Explicit cocycle isomorphisms]]

## Facts & Assumptions

[F1] The constructed finite-concentration lemma supplies a subsequence, finite $S$, its energy lower and cardinality bounds, and uniform curvature bounds on every compact subset of $\Omega\setminus S$ ([[lem-euclidean-asd-energy-concentration-is-finite]]).

[F2] The actual ball gauge construction gives local gauges in every finite $W^{2,p}$ and uniformly bounded $W^{1,2}$ Coulomb forms with $\|a_i^n\|_4\le C_0\|F_{A_n}\|_{L^2(U_i)}$ ([[lem-small-critical-curvature-coulomb-gauges-on-four-balls]]). The full proof of [[lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover]], steps 2.1–7.1, constructs weak/Rellich extraction and strong overlap convergence. After extraction its transition-equation, critical-drift and cocycle arguments involve only one, two or three fixed charts at a time.

[F3] The weak Coulomb ASD interior regularity lemma proves smoothness and an explicit critical first-order contraction and derivative bootstrap. The quantitative estimates in the small-energy lemma, proof steps 2.1–4.1, bound local $L^{12}$, $W^{1,6}$ and $W^{2,6}$ norms in a small-$L^4$ Coulomb gauge with fixed cutoffs; the full derivative induction in the regularity proof controls every subsequent order ([[lem-weak-euclidean-asd-coulomb-connections-are-interior-smooth]], [[lem-euclidean-asd-small-energy-curvature-bound]]).

[F4] Equicontinuous pointwise-bounded sequences of real continuous functions on compact metric spaces have uniformly convergent subsequences under the present AC hypothesis. Sobolev embeddings and ball extensions give bounded $C^{0,\alpha}$ norms from bounded $W^{1,6}$ norms for $0<\alpha<1/3$. Holder compares finite exponents on bounded sets ([[cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence]], [[thm-higher-order-sobolev-embedding]], [[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-holder-inequality-for-integrals]]).

[F5] The explicit isomorphism proof uses finite smooth weights and $S_i^n=\sum_j\phi_jh_{ij}^nh_{ji}$ followed by scalar quaternionic normalization. It supplies the exact identity $h_{ij}=(\sigma_i^n)^{-1}h_{ij}^n\sigma_j^n$ on a smaller neighborhood of a chosen compact set ([[lem-close-su-two-cocycles-admit-constructed-sobolev-isomorphisms]]).

[F6] Full AC permits all the countable choices and diagonal extractions below ([[def-axiom-of-choice]]).

## Proof

**Given:** The smooth Euclidean ASD sequence and total energy bound. Use [F1] first and retain its subsequence.

1.1 **One fixed countable uniformly small cover.** Choose $\epsilon_*>0$ below both the ball-gauge threshold and the finite-cover compactness threshold in [F2], and small enough that $cC_0\epsilon_*\max(M_2,M_3)\le1/2$ for the explicit first-order contraction constants in [F3]. List all rational-center, rational-radius balls $U_i$ with $\overline U_i\subset\Omega\setminus S$ and $\sup_n\|F_{A_n}\|_{L^2(U_i)}\le\epsilon_*$. They cover $\Omega\setminus S$: near each point [F1] gives a uniform bound $L$ on all curvatures, so sufficiently small balls with closure in that neighborhood satisfy $\|F\|_2\le |B|^{1/2}L\le\epsilon_*$, and one may choose a rational such ball containing the point. Every original $A_n$ is smooth near each closed $U_i$. By [F2] and [F6], choose its constructed gauge $g_i^n$ once for each pair $(i,n)$, and set $h_{ij}^n=(g_i^n)^{-1}g_j^n$. The forms, critical bounds and transition identities are now fixed before any subsequence extraction. [F1, F2, F3, F4, F6, given, choose, construct]

2.1 **One diagonal for all charts and transitions.** Each chart has uniformly bounded $W^{1,2}$ forms and uniformly small $L^4$ norms. For every chart list the weak-Hilbert and strong-Rellich extraction task in the full proof [F2]. For every ordered pair of charts list the transition strong-$L^2$ and almost-everywhere extraction tasks on the countable rational balls with doubled closure inside their overlap, as in that proof. The combined list is countable. Choose nested infinite subsequences accomplishing these tasks in order, and take the $k$th index of the $k$th nested subsequence. Its indices strictly increase and eventually belong to each earlier sequence. Thus every chart has the same subsequential weak $W^{1,2}$ and strong $L^p$, $p<4$, limit, and every overlap has its extracted transition class. The proof in [F2], applied to each fixed pair with these very limits, passes the transition equation, proves $W^{2,q}_{\mathrm{loc}}$ regularity for every $2<q<4$, and proves strong $W^{2,12/5}_{\mathrm{loc}}$ and uniform-on-compact transition convergence by its actual small-drift difference equation. Applied to each fixed triple, it passes the pointwise cocycle. There are countably many pairs and triples, and all already use the same extracted indices. This constructs one compatible continuous cocycle $h_{ij}$ and weak ASD connection $a_i$ on the whole cover, rather than separately chosen limits on compact exhaustions. [F2, F6, step 1.1, choose, construct, algebra]

2.2 **Uniform higher estimates in every interior chart region.** By [F3], every $a_i^n$ and $a_i$ is smooth in $U_i$. Fix nested smaller balls compactly contained in $U_i$. The fixed-cutoff contraction from [F3] bounds the $L^{12}$ norm of $a_i^n$ on a smaller ball uniformly by its bounded $L^4(U_i)$ norm. Its actual first-order estimate then bounds the $W^{1,6}$ norm on a further smaller ball uniformly. To obtain higher bounds, use the full derivative induction of [F3] quantitatively: on bounded smaller balls $W^{m,6}$ is a multiplication algebra for $m\ge1$, since all derivatives of order at most $m-1$ are bounded by [F4]. Consequently the quadratic source has $W^{m,6}$ norm at most a constant times the squared $W^{m,6}$ norm of the form. A fixed cutoff and the first-order estimate applied to order-$m$ derivatives give a uniform $W^{m+1,6}$ bound on a still smaller ball. For any prescribed finite order, choose the finite chain of concentric radii between the target closed ball and $\partial U_i$ in advance. Induction gives a bound for that order independent of $n$. Thus every finite Sobolev order of $a_i^n$ is uniformly bounded on every compact subset of $U_i$. [F2, F3, F4, step 1.1, choose, induction, algebra]

3.1 **A final diagonal gives smooth convergence of all forms.** List, for every chart, closed rational balls compactly contained in it, every multi-index, and every real coefficient of the corresponding derivative. By step 2.2 and [F4], these derivative sequences have uniformly bounded $C^{0,\alpha}$ norms for any fixed $0<\alpha<1/3$, so [F4] supplies uniformly convergent subsequences. Perform one nested diagonal over this countable list. The resulting limit of the undifferentiated form equals $a_i$ by its earlier strong $L^2$ convergence. Limits of the derivative sequences are its classical derivatives: pass the coordinate-segment fundamental theorem on an inner ball using uniform convergence of a function and its first derivatives, and iterate for higher derivatives. Finite ball covers of compact subsets show $a_i^n\to a_i$ in $C^\infty_{\mathrm{loc}}(U_i)$ along this single final subsequence. Every previously obtained chart, overlap and energy convergence persists under this extraction. [F2, F3, F4, F6, step 2.1, step 2.2, choose, construct, algebra]

4.1 **Smooth transitions and smooth local gauges.** The equation $dh_{ij}=h_{ij}a_j-a_i h_{ij}$ with smooth coefficients and bounded $h_{ij}$ first gives $h_{ij}\in W^{1,p}_{\mathrm{loc}}$ for every finite $p$. Repeated weak differentiation and multiplication by the smooth coefficients give every higher local Sobolev order, hence smoothness by [F4]. The same argument makes each $h_{ij}^n$ smooth. Starting with its already proved uniform-on-compact convergence and the smooth convergence of the $a_i^n$, its first-order transition equation gives uniform convergence of first derivatives on compact subsets; differentiating that equation and inducting gives all subsequent derivatives. Thus $h_{ij}^n\to h_{ij}$ in $C^\infty_{\mathrm{loc}}$. Likewise $dg_i^n=g_i^na_i^n-A_ng_i^n$, boundedness of $g_i^n$, and the smooth coefficients give smoothness of $g_i^n$ in the interior by the same weak derivative induction; its whole-ball finite $W^{2,p}$ membership is unchanged from [F2]. This proves exactly the smooth global cocycle and compatible ASD data of the statement. [F2, F3, F4, step 1.1, step 2.1, step 3.1, induction, algebra]

5.1 **Identification on each compact neighborhood without another subsequence.** A fixed nonempty compact $K\subset\Omega\setminus S$ is covered by finitely many of the $U_i$. Apply the explicit averaging construction [F5] to these charts and the same already convergent cocycles. It requires only deleting finitely many terms until the finite compact overlap differences are less than its fixed threshold, so no new subsequence is necessary. Its matrices $S_i^n$ now converge to $I$ in $C^\infty_{\mathrm{loc}}$, by the smooth convergence of the transition maps. Scalar normalization stays uniformly away from zero, so ordinary finite-order differentiation gives $\sigma_i^n\to I$ in $C^\infty_{\mathrm{loc}}$. The exact isomorphism identity identifies all transferred forms with the fixed limiting cocycle, and the gauge formula shows their smooth convergence to $a_i$. The energy and cardinality bounds for $S$ from [F1] persist along the final subsequence. No extension across $S$ has been constructed. Full AC is used through [F1]–[F6]. [F1, F2, F3, F4, F5, F6, step 2.1, step 3.1, step 4.1, construct, algebra] ∎

## Source notes

The full Sil Theorem 32 proof, PDF pp.24–27, and Wehrheim's thesis introduction, printed pp.3–4/PDF pp.11–12, were read. The broader quoted compactness and removable-singularity theorems are not premises. Here actual previously proved gauge, overlap-drift, isomorphism, concentration and ASD regularity modules supply the proof; the countable diagonal is made once for fixed gauges on fixed charts, and a second diagonal improves convergence without changing any earlier limits. General metric and singular models, extension across concentration points, bubble quantization and full Floer compactifications remain distinct proof obligations.
