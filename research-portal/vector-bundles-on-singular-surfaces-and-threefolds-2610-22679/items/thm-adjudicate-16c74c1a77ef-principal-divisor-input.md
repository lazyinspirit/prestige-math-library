---
id: thm-adjudicate-16c74c1a77ef-principal-divisor-input
kind: theorem
title: Proper norm and graph formulas for principal divisors
status: published
domain: mathematics
external_input: true
deps:
  - math:def-axiom-of-choice
  - math:lem-integral-finite-type-scheme-function-field
  - math:def-field-norm-and-trace
  - math:def-algebraic-cycle-and-cycle-group
  - math:lem-order-function-one-dimensional-local-domain
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - math:def-proper-morphism
  - math:lem-proper-pushforward-of-cycles-well-defined
  - math:def-relative-projective-space-standard-charts
  - math:def-graph-morphism-over-base
  - math:def-birational-morphism-schemes
  - math:def-scheme-theoretic-fibre
  - math:def-effective-cartier-divisor
  - math:lem-cycle-of-a-closed-subscheme
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:lem-integral-finite-type-scheme-function-field: mathematical-premise
  math:def-field-norm-and-trace: mathematical-premise
  math:def-algebraic-cycle-and-cycle-group: mathematical-premise
  math:lem-order-function-one-dimensional-local-domain: mathematical-premise
  math:def-chow-group-of-cycles-mod-rational-equivalence: mathematical-premise
  math:def-proper-morphism: mathematical-premise
  math:lem-proper-pushforward-of-cycles-well-defined: mathematical-premise
  math:def-relative-projective-space-standard-charts: mathematical-premise
  math:def-graph-morphism-over-base: mathematical-premise
  math:def-birational-morphism-schemes: mathematical-premise
  math:def-scheme-theoretic-fibre: mathematical-premise
  math:def-effective-cartier-divisor: mathematical-premise
  math:lem-cycle-of-a-closed-subscheme: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
sources:
  references:
    - title: Stacks Project, Principal divisors and proper pushforward
      url: https://stacks.math.columbia.edu/tag/02RT
      locator: Lemma 42.18.1, tag 02RT, complete statement and displayed proof;
        re-read live tag text 2026-11-12; no pinned commit asserted
      statement: For integral schemes locally of finite type over the base of
        Situation 42.7.1, a proper dominant map of equal dimension pushes the
        divisor of a rational function to the divisor of its field norm.
      hypotheses: Situation 42.7.1; integral source and target of equal
        delta-dimension; proper dominant morphism; nonzero rational function.
        There is no separatedness-over-the-base, normality or separability
        hypothesis.
      reading_limits: Read the complete live statement and proof on 2026-11-12. The
        finite-map reduction and algebraic norm identity cited there were not
        independently reconstructed. Only this theorem is imported; the library
        pushforward supplier is used for its cycle interface.
    - title: Stacks Project, Graph formula for a principal divisor
      url: https://stacks.math.columbia.edu/tag/02RQ
      locator: Lemma 42.18.2, tag 02RQ, assertions (1)-(5) and complete displayed
        proof; re-read live tag text 2026-11-12; no pinned commit asserted
      statement: For an integral scheme and a nonzero rational function, closing its
        graph from a nonempty open of invertibility gives a proper projection,
        an isomorphism over that open, and effective Cartier zero and infinity
        fibres whose cycle difference pushes to the principal divisor.
      hypotheses: Situation 42.7.1; integral scheme locally of finite type over the
        base; function nonzero in its function field and invertible on the
        chosen nonempty open. No separatedness-over-the-base, normality or
        separability assumption is made.
      reading_limits: Read the complete live statement and proof on 2026-11-12,
        including the graph closure independence and quotient-length
        computation. Cited Cartier-pullback, properness and dimension lemmas
        were not independently reconstructed. The fibre schemes retain their
        full scheme structures.
    - title: Stacks Project, Chow homology setup over a field
      url: https://stacks.math.columbia.edu/tag/02QK
      locator: "Section 42.7: Situation 42.7.1, induced dimension-function paragraph,
        Example 42.7.2 and Lemma 42.7.5 with its displayed proof; read live text
        2026-11-12"
      statement: The spectrum of a field with dimension function zero satisfies the
        setup. The induced value at a point is its residue-field transcendence
        degree; at the generic point of an integral closed subscheme it equals
        its ordinary dimension.
      hypotheses: Field base for Example 42.7.2; schemes locally of finite type over
        that base. Lemma 42.7.5 assumes a Jacobson base and dimension function
        zero at closed points, as holds here.
      reading_limits: Read the stated setup, example, induced-function paragraph and
        full Lemma 42.7.5 statement and proof on 2026-11-12. The referenced
        universal-catenarity, Jacobson and dimension-function foundation lemmas
        were not independently reconstructed. No more general base is asserted
        here.
dependency_level: 0
---

## Statement
Assume the Axiom of Choice for the cited cycle and finite-length interfaces. Let $k$ be a field. For integral finite-type $k$-schemes $P,Q$, a proper dominant generically finite morphism $p:P\to Q$ and $h\in k(P)^\times$ satisfy
$$p_*\operatorname{div}_P(h)=\operatorname{div}_Q\operatorname{Nm}_{k(P)/k(Q)}(h).$$
Divisor orders use lengths in the one-dimensional local rings, and pushforward includes residue-field degrees.

For an integral finite-type $k$-scheme $Q$ and $f\in k(Q)^\times$, let $G\subset Q\times\mathbf P^1$ be the reduced closure of the graph on any nonempty open where $f$ is invertible. Its projection $p:G\to Q$ is proper birational. The fibers $G_0,G_\infty$ are effective Cartier divisors, allowing the empty divisor, and
$$p_*([G_0]-[G_\infty])=\operatorname{div}_Q(f).$$
Neither scheme is required to be separated over $k$.

## Statement references

[[math:def-axiom-of-choice]]

[[math:lem-integral-finite-type-scheme-function-field]]

[[math:def-field-norm-and-trace]]

[[math:def-algebraic-cycle-and-cycle-group]]

[[math:lem-order-function-one-dimensional-local-domain]]

[[math:def-chow-group-of-cycles-mod-rational-equivalence]]

[[math:def-proper-morphism]]

[[math:lem-proper-pushforward-of-cycles-well-defined]]

[[math:def-relative-projective-space-standard-charts]]

[[math:def-graph-morphism-over-base]]

[[math:def-birational-morphism-schemes]]

[[math:def-scheme-theoretic-fibre]]

[[math:def-effective-cartier-divisor]]

[[math:lem-cycle-of-a-closed-subscheme]]

## Facts & Assumptions

**Given:** The field, schemes, morphism and rational functions of the statement. The formulas are imported results, with the following explicit formulation conventions.

[A1] AC is inherited from the selected order and proper-pushforward interfaces; no minimal-choice assertion is made. The function-field supplier's geometric-integrality clause is unused. [[math:def-axiom-of-choice]]

[F1] For an integral finite-type $k$-scheme $T$ with generic point $\eta$, write $k(T)=\mathcal O_{T,\eta}$, canonically the fraction field on any nonempty affine open. Here dominant means that the generic point maps to the generic point, and generically finite means that the resulting extension of function fields is finite. For a finite extension $L/K$, $\operatorname{Nm}_{L/K}(h)$ is the determinant of the $K$-linear map $x\mapsto hx$ on $L$. [[math:lem-integral-finite-type-scheme-function-field]], [[math:def-field-norm-and-trace]]

[F2] The group $Z_d(T)$ consists of finite integral linear combinations of integral closed $d$-dimensional subschemes. At a codimension-one point $\xi$ of integral $T$, put $R=\mathcal O_{T,\xi}$. For $h=a/b$ with $a,b\in R\setminus\{0\}$, set $\operatorname{ord}_R(h)=\ell_R(R/aR)-\ell_R(R/bR)$, using module length. The order supplier establishes finite lengths and independence of the presentation. The principal-divisor cycle is $\operatorname{div}_T(h)=\sum_\xi\operatorname{ord}_{\mathcal O_{T,\xi}}(h)[\overline{\{\xi\}}]$; the rational-equivalence interface supplies the finiteness of its nonzero support for finite-type $T$. No normality is needed for this length definition. [[math:def-algebraic-cycle-and-cycle-group]], [[math:lem-order-function-one-dimensional-local-domain]], [[math:def-chow-group-of-cycles-mod-rational-equivalence]]

[F3] Proper means separated, finite type and universally closed as a morphism. For any proper map $p:T\to T'$ of finite-type $k$-schemes and an integral closed $V\subseteq T$, take $W=p(V)$ with the reduced structure. If $\dim W=\dim V$, set $p_*[V]=[k(V):k(W)][W]$; if $\dim W<\dim V$, set $p_*[V]=0$. Linear extension is proper pushforward of cycles. The cited pushforward interface establishes that this operation is well defined. Its cycle-map clause is used here, not its norm formula as a substitute for the stated Stacks import. Properness of $p$ does not require $T$ or $T'$ to be separated over $k$. [[math:def-proper-morphism]], [[math:lem-proper-pushforward-of-cycles-well-defined]]

[F4] Write $\mathbf P^1=\mathbf P^1_k$ using its standard charts with coordinates $u$ and $u^{-1}$, with $0$ and $\infty$ their origins. For $f$ invertible on $U$, the graph morphism is $(\operatorname{id}_U,f):U\to Q\times_k\mathbf P^1_k$. The reduced graph closure $G$ is the closure of this image with reduced induced scheme structure, as in the graph import. Birational means that the generic points correspond and the induced function-field map is an isomorphism. [[math:def-relative-projective-space-standard-charts]], [[math:def-graph-morphism-over-base]], [[math:def-birational-morphism-schemes]]

[F5] If $q:G\to\mathbf P^1_k$ is the second projection, the fibres are the scheme-theoretic products $G_a=G\times_{\mathbf P^1_k}\operatorname{Spec}k$ for $a=0,\infty$. An effective Cartier divisor is locally cut out by one nonzerodivisor; a unit cuts out the empty divisor. For a fibre divisor $D$, its cycle is $[D]=\sum_V\ell_{\mathcal O_{D,\eta_V}}(\mathcal O_{D,\eta_V})[V]$, over its integral irreducible components $V$. This is the fundamental cycle of the full fibre scheme, not of its reduction; the empty fibre gives zero. The closed-subscheme cycle supplier is used only for this fundamental-cycle construction, not for flat pullback. [[math:def-scheme-theoretic-fibre]], [[math:def-effective-cartier-divisor]], [[math:lem-cycle-of-a-closed-subscheme]]

## External input

Import the proper norm identity from Stacks Lemma 42.18.1 and the graph construction and zero-minus-pole identity from Lemma 42.18.2. Their hypotheses specialize to the statement: the finite function-field extension gives equal dimensions, and the graph projection is an isomorphism over $U$.

Section 42.7, Example 42.7.2 and Lemma 42.7.5 justify the field-base specialization of Situation 42.7.1: the base has dimension function zero, and the induced cycle grading is ordinary dimension. These setup facts are included in the third reference.

The substantial formulas and graph properties are imported, not locally reconstructed. The interfaces in Facts & Assumptions specify all cycles, multiplicities and maps. No higher-Chow comparison or localization theorem is assumed.
