---
id: lem-serre-fibration-replacement-preserves-fiber-homology-transport
kind: lemma
title: Serre-fibration replacement preserves fiber homology transport
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-hurewicz-and-serre-fibrations, thm-mapping-path-factorization, def-homotopy-fiber-of-a-map, prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace, lem-interval-exponential-law-and-quotient-homotopies, lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups, lem-relative-cubical-disk-model-and-compression, prop-relative-cw-inclusions-are-cofibrations, lem-finite-choice, lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex, def-relative-singular-homology, thm-singular-chain-homotopy-formula, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-quotient-universal-property, def-fiber-transport-and-monodromy-action, prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Lectures 24 and 28"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 24, fibration replacement and transport; Lecture 28, local-coefficient Serre spectral sequence"
---

## Statement

Let $p:E\to B$ be a Serre fibration, let
$j:E\to E_p$ be its constant-path inclusion into the mapping-path Hurewicz
replacement $p_p:E_p\to B$, and let $b\in B$. The restricted map
$$j_b:F_b=p^{-1}(b)\longrightarrow p_p^{-1}(b)=\operatorname{hofib}_b(p),\qquad e\longmapsto(e,c_b),$$
is a weak homotopy equivalence: it is bijective on path components and induces
an isomorphism on every positive homotopy group at every strict-fiber
basepoint. Consequently, for every abelian group $G$,
$$(j_b)_*:H_q(F_b;G)\xrightarrow{\cong}H_q(\operatorname{hofib}_b(p);G)$$
for every $q\geq0$. In particular this is the asserted integral-homology
isomorphism when $G=\mathbb Z$.

The maps $(j_b)_*$ are natural for strictly commuting squares of Serre
fibrations. Conjugating Hurewicz transport in $p_p$ by these isomorphisms gives
the strict-fiber $G$-homology transport, and with this definition every
$(j_b)_*$ commutes with transport. All assertions are choice-free.

## Facts & Assumptions

**Given:** The Serre fibration, its functorial mapping-path replacement, and an actual base point $b$.

[F1] [[thm-mapping-path-factorization]] makes $p_p$ a Hurewicz fibration, makes $j$ an ordinary homotopy equivalence, and gives the strict equality $p_pj=p$. No homotopy inverse over $B$ is asserted or used.

[F2] [[def-homotopy-fiber-of-a-map]] identifies the fiber of $p_p$ over $b$ with the displayed pairs $(e,\gamma)$, where $\gamma(0)=p(e)$ and $\gamma(1)=b$.

[F3] [[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]] gives Serre lifting relative to a finite CW subcomplex without AC.

[F4] [[lem-interval-exponential-law-and-quotient-homotopies]] makes the parameterized path truncations used below continuous.

[F5] [[lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups]] characterizes a weak equivalence by component bijectivity and vanishing relative homotopy groups of its mapping-cylinder pair.

[F6] [[lem-relative-cubical-disk-model-and-compression]] compresses a trivial relative disk into its subspace while fixing its boundary. [[prop-relative-cw-inclusions-are-cofibrations]] extends the resulting homotopies, and [[lem-finite-choice]] licenses the finitely many witnesses for one finite complex.

[F7] [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] constructs a finite CW complex from the labeled faces of a finite singular chain, while [[def-relative-singular-homology]] describes finite relative cycles with arbitrary abelian coefficients.

[F8] [[thm-singular-chain-homotopy-formula]] gives the prism identity in every degree $n\geq1$ and its separately stated degree-zero reduction, for every abelian coefficient group. [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] gives the natural pair sequence with those coefficients.

[F9] [[thm-quotient-universal-property]] and [F4] make the standard mapping-cylinder retraction and deformation continuous.

[F10] [[prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent]] proves the path-homotopy, composition, inverse, and lifting-function independence properties of Hurewicz transport.

## Proof

**Proof technique:** finite relative straightening in the homotopy fiber.

1.1 By [F1]–[F2], the displayed $j_b$ is the restriction of $j$ to the strict fiber. Let $$a:(I^n,\partial I^n)\longrightarrow (\operatorname{hofib}_b(p),j_b(e_0))$$ be a based cube, $n\geq1$, and write $a(x)=(e(x),\gamma_x)$. The adjoint $H(x,s)=\gamma_x(s)$ is a homotopy from $p(e(x))$ to the constant map $b$. Apply [F3] to the finite pair $(I^n,\partial I^n)$, prescribing $e(x)$ at $s=0$ and the constant lift $e_0$ on $\partial I^n\times I$. We obtain $\widetilde H$ with $p\widetilde H=H$. For $0\leq t\leq1$ put $$ a_t(x)=\left(\widetilde H(x,t), s\longmapsto\gamma_x\bigl(t+(1-t)s\bigr)\right). $$ The second coordinate starts at $p\widetilde H(x,t)=\gamma_x(t)$ and ends at $b$, so $a_t$ stays in the homotopy fiber. It is continuous by [F4], is based for every $t$, begins at $a$, and ends at $j_b(x\mapsto\widetilde H(x,1))$. Thus $(j_b)_*$ is surjective on every positive homotopy group. [F1, F2, F3, F4]

1.2 Let $(T,S)$ have every component of $T$ meeting $S$ and all positive relative homotopy sets trivial. For a finite relative $G$-cycle $c=\sum g_\sigma\sigma$, attach one simplex for every distinct iterated face of its finite support. By [F7] this produces a finite CW pair $(K,L)$, a map $v:(K,L)\to(T,S)$, and a relative cycle $\widetilde c$ with $v_\#\widetilde c=c$. Compress the finitely many cells of $K\setminus L$ in increasing dimension: paths move zero-cells into $S$, [F6] compresses each later characteristic disk once its boundary lies in $S$, and the cofibration clause in [F6] extends each finite-stage homotopy. The endpoint $w$ maps $K$ into $S$. The [F8] prism identity says $$w_\#\widetilde c-v_\#\widetilde c=\partial P\widetilde c+P\partial\widetilde c;$$ all terms except $c$ vanish in the relative complex. Its degree-zero clause handles $k=0$. Hence $H_k(T,S;G)=0$ for every $k$, using only finitely many choices for this one chain. [F6, F7, F8]

2.1 Suppose a based cube $c:(I^n,\partial I^n)\to(F_b,e_0)$ becomes null after applying $j_b$. Represent the nullhomotopy by a map from $I^n\times I$ to the homotopy fiber, constant on $(\partial I^n\times I)\cup(I^n\times\{1\})$ and equal to $j_bc$ on $I^n\times\{0\}$. Repeat step 1.1 with this finite cube as parameter space, but prescribe the evident strict-fiber lift on that whole boundary subcomplex. The straightening is relative there. At its endpoint it is a homotopy in $F_b$ from $c$ to the constant cube, so $(j_b)_*$ is injective. The same argument with parameter space $I$ and its two endpoints shows that a path between $j_b(e_0)$ and $j_b(e_1)$ straightens, relative to its endpoints, to a path from $e_0$ to $e_1$ in $F_b$. With a point as parameter, step 1.1 shows every homotopy-fiber component meets $j_b(F_b)$. Hence $j_b$ is also bijective on path components and is a weak homotopy equivalence. [F2, F3, F4, step 1.1]

3.1 For any weak equivalence $f:X\to Y$, [F5] gives the relative-homotopy hypotheses of step 1.2 for its mapping-cylinder pair $(M_f,jX)$. Hence $H_*(M_f,jX;G)=0$, and exactness in [F8] makes $j_*:H_*(X;G)\to H_*(M_f;G)$ an isomorphism. The standard quotient formulas retract $M_f$ onto $Y$ and deform the identity to that retraction by [F9]; [F8] makes the induced maps inverse on homology. Thus every weak equivalence induces $G$-homology isomorphisms without AC. Apply this to $j_b$ from step 2.1. [F5, F8, F9, step 1.2, step 2.1]

4.1 A strictly commuting square $vp=p'u$ induces the pointwise mapping-path map $$U:E_p\to E_{p'},\qquad U(e,\gamma)=(u(e),v\gamma),$$ and the formulas give the literal equality $Uj=j'u$. Restricting to fibers therefore makes the $(j_b)_*$ natural before and after homology. For a base path $\gamma:b\to c$, the maps $U_cT^{p_p}_\gamma$ and $T^{p_{p'}}_{v\gamma}U_b$ are two endpoint maps obtained by lifting the same path $v\gamma$ with the same initial fiber map. Lifting-function independence in [F10] makes them homotopic in the target fiber. The prism identity [F8], tensored with the arbitrary abelian group $G$, therefore makes their induced $G$-homology maps equal. Define $$\tau_\gamma=(j_c)_*^{-1}\,H_q(T^{p_p}_\gamma;G)\,(j_b)_*.$$ Cancellation shows that $(j_b)_*$ commutes with transport, and the just-proved square together with $Uj=j'u$ proves naturality for $(u,v)$. [F1, F8, F10, step 2.1, step 3.1]

5.1 If $F_b=\varnothing$ but $(e,\gamma)$ belonged to the homotopy fiber, path lifting for the single path $\gamma$ in [F3] would end at a point of $F_b$, a contradiction; hence both fibers are empty. A one-point fiber, constant paths, both path endpoints, $n=1$, $q=0$, $G=0$, and $G=\mathbb Z$ were included above. Every lift concerns one finite CW problem, and step 1.2 handles one finite chain at a time; no family of lifts, bases, or homology representatives is selected. Thus no form of AC is used. [F3, F6, F8, F10, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎
