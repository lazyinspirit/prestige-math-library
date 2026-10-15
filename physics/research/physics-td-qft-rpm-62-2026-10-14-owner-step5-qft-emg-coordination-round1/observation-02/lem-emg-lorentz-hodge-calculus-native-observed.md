---
id: lem-emg-lorentz-hodge-calculus
kind: lemma
title: "Lorentzian exterior calculus and Hodge star"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-countable-choice, def-emg-lorentzian-forms, def-exterior-derivative-by-the-invariant-vector-field-formula, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-local-frame-and-tetrad-fields, def-gr-metric-volume-form-and-current-flux, def-oriented-smooth-manifold-and-oriented-chart, def-smooth-differential-k-form, def-wedge-product-of-differential-forms, lem-gr-metric-volume-form-patching-and-face-normal, lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear, prop-differential-forms-form-a-graded-commutative-algebra, prop-local-coordinate-expression-for-a-differential-form, thm-clairaut-schwarz-mixed-partials, thm-local-coordinate-formula-for-the-exterior-derivative, thm-the-exterior-derivative-is-a-graded-derivation]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  lem-gr-metric-volume-form-patching-and-face-normal: mathematical-premise
  lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear: mathematical-premise
  prop-differential-forms-form-a-graded-commutative-algebra: mathematical-premise
  prop-local-coordinate-expression-for-a-differential-form: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, section 3.1.3, The Hodge Dual, equations (3.97)-(3.98)"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "Section 3.1.3, equations (3.97)-(3.98): Hodge star from the metric and orientation, with the Lorentzian signature factor."
    - title: "H. S. Reall, Part III General Relativity, Cambridge, October 12 2022 revision, sections 8.1 and 8.5, equations (8.1)-(8.9) and (8.52)-(8.56)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Section 8.1, equations (8.1)-(8.9): forms, wedge and exterior derivative; section 8.5, equations (8.52)-(8.56): Lorentzian volume, Hodge definition and star square."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $(M,g,N,o)$ have the oriented, time-oriented Lorentzian structure and volume form of [[def-emg-lorentzian-forms]]. On decomposable $k$-covectors define the induced exterior pairing by

$$\langle\alpha_1\wedge\cdots\wedge\alpha_k,\beta_1\wedge\cdots\wedge\beta_k\rangle_g:=\det\bigl(g^{-1}(\alpha_i,\beta_j)\bigr),$$

and extend it bilinearly. For $0\le k\le4$, its coordinate expression is the pointwise exterior metric on $k$-covectors

$$\langle\alpha,\beta\rangle_g:=\frac1{k!}\alpha_{a_1\cdots a_k}\beta^{a_1\cdots a_k},$$

where indices are raised by $g^{-1}$. There is a unique smooth bundle map $\star_g:\Omega^k(M)\to\Omega^{4-k}(M)$ characterized by

$$\alpha\wedge\star_g\beta=\langle\alpha,\beta\rangle_g\,\mathrm{vol}_g$$

at every point. In a positively oriented $g$-orthonormal coframe $(e^0,e^1,e^2,e^3)$, put $\epsilon_0=-1$ and $\epsilon_1=\epsilon_2=\epsilon_3=1$. For an increasing index set $I\subseteq\{0,1,2,3\}$, let $I^c$ be its increasing complement, let $s(I,I^c)$ be the sign of the permutation $(I,I^c)$ to $(0,1,2,3)$, and set $\epsilon_I:=\prod_{i\in I}\epsilon_i$. Then

$$\star_g e^I=\epsilon_I s(I,I^c)e^{I^c}.$$

Consequently, on $k$-forms,

$$\star_g^2=(-1)^{k(4-k)+1}\operatorname{id}.$$

In particular $\star_g^2=-\operatorname{id}$ on two-forms. For a two-form $F$, the component formula in a positively oriented chart is

$$({\star_gF})_{ab}=\frac12(\mathrm{vol}_g)_{abcd}F^{cd}.$$

The exterior derivative in [[def-exterior-derivative-by-the-invariant-vector-field-formula]] has the local coordinate formula of [[thm-local-coordinate-formula-for-the-exterior-derivative]], satisfies $d^2=0$, and obeys the graded product rule of [[thm-the-exterior-derivative-is-a-graded-derivation]].

## Facts & Assumptions

**Given:** The smooth oriented Lorentzian structure, its metric volume form, and smooth differential forms of degrees $0$ through $4$.

[F1] The oriented Lorentzian manifold has signature $(-,+,+,+)$, and each point has a neighborhood with a positively oriented smooth orthonormal tetrad. The metric volume form has value $+1$ on a positively oriented orthonormal tetrad. ([[def-emg-lorentzian-forms]], [[def-gr-local-frame-and-tetrad-fields]], [[def-gr-metric-volume-form-and-current-flux]], [[lem-gr-metric-volume-form-patching-and-face-normal]])

[F2] A smooth $k$-form is a smooth section of $\bigwedge^kT^*M$ and has a unique local expansion in increasing coordinate wedges. ([[def-smooth-differential-k-form]], [[prop-local-coordinate-expression-for-a-differential-form]])

[F3] The wedge product is the pointwise alternating product of covectors and differential forms form an associative graded-commutative algebra. ([[def-wedge-product-of-differential-forms]], [[prop-differential-forms-form-a-graded-commutative-algebra]])

[F4] The exterior derivative is defined by its invariant vector-field formula; it is a smooth form, and in coordinates it is $(d\alpha)_{a_0\cdots a_k}=(k+1)\partial_{[a_0}\alpha_{a_1\cdots a_k]}$. ([[def-exterior-derivative-by-the-invariant-vector-field-formula]], [[lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear]], [[thm-local-coordinate-formula-for-the-exterior-derivative]])

[F5] Smooth mixed partial derivatives commute, and the exterior derivative is an $\mathbb R$-linear degree-one graded derivation of the wedge algebra. ([[thm-clairaut-schwarz-mixed-partials]], [[thm-the-exterior-derivative-is-a-graded-derivation]])

[F6] The inverse metric raises covector slots. In an orthonormal coframe, the determinant pairing of decomposable wedges is diagonal, with diagonal entry the product of their metric signs; its component expression is the normalized contraction displayed in the Statement, since each increasing index set occurs $k!$ times in the full antisymmetric sum. ([[def-gr-inverse-metric-and-musical-isomorphisms]])

## Proof

1.1 The determinant is alternating multilinear in each list, so it defines a bilinear pairing on exterior powers. In a positively oriented orthonormal coframe, it makes the basis wedges $e^I$ orthogonal with squared norm $\epsilon_I$; in the full component contraction this same diagonal value occurs $k!$ times, canceled by the factor $1/k!$. Define $\star_g e^I=\epsilon_I s(I,I^c)e^{I^c}$ and extend linearly. If $J\ne I$ has the same size as $I$, then $e^J\wedge e^{I^c}=0$ because an index repeats. If $J=I$, then $e^I\wedge e^{I^c}=s(I,I^c)\mathrm{vol}_g$, so $e^I\wedge\star_g e^I=\epsilon_I\mathrm{vol}_g$. Bilinearity proves the characterizing identity for all forms in the coframe. The complement wedges pair each basis vector with exactly one basis vector, so this wedge pairing is nondegenerate and the characterization determines $\star_g$ uniquely. [F1, F2, F3, F6, algebra, construct]

2.1 The characterizing identity uses only $g$, the orientation, and $\mathrm{vol}_g$. Any other positively oriented orthonormal coframe therefore defines the same map by uniqueness. In each smooth tetrad neighborhood the displayed matrix of $\star_g$ is constant in the smooth coframe, so its coordinate coefficients are smooth; the locally defined maps agree on overlaps and give a global smooth bundle map. [step 1.1, F1, F2, algebra]

2.2 Applying the basis formula twice gives $\star_g^2e^I=\epsilon_I\epsilon_{I^c}s(I,I^c)s(I^c,I)e^I$. The product $\epsilon_I\epsilon_{I^c}$ equals $-1$ because exactly one of the four $\epsilon_i$ is negative. Reversing the two blocks of sizes $k$ and $4-k$ takes $k(4-k)$ transpositions, so $s(I,I^c)s(I^c,I)=(-1)^{k(4-k)}$. Their product is $(-1)^{k(4-k)+1}$, proving the square formula for each basis element and hence for every $k$-form. [step 1.1, algebra]

2.3 For a two-form $F=\frac12F_{cd}e^c\wedge e^d$, the basis formula sends each $e^c\wedge e^d$ to its oriented complementary wedge with the product of its metric signs. In components this is $({\star_gF})_{ab}=\frac12(\mathrm{vol}_g)_{abcd}F^{cd}$: the factor $1/2$ counts each antisymmetric pair once, and raising both indices includes the negative sign in the timelike slot. [step 1.1, F1, F6, algebra]

3.1 In a chart, [F4] gives $(d\alpha)_{a_0\cdots a_k}=(k+1)\partial_{[a_0}\alpha_{a_1\cdots a_k]}$. Applying it twice expresses each coefficient of $d^2\alpha$ as an alternating sum of second partial derivatives; terms paired by exchanging the first two derivative indices cancel because those mixed partials agree by [F5]. Thus $d^2\alpha=0$ in every chart and hence globally. The graded product rule is exactly the established identity in [F5]. [F4, F5, algebra] ∎

## Remarks

The positive-definite Hodge formula would omit the extra signature sign. It is not a supplier for this item: the single negative direction contributes $\epsilon_I\epsilon_{I^c}=-1$ in step 2.2. No metric field equation, Maxwell postulate, global potential, or physical interpretation is used.

The geometric suppliers [[def-emg-lorentzian-forms]] and [[def-gr-local-frame-and-tetrad-fields]] record $\mathrm{AC}_\omega$ as a background axiom: every countable family of nonempty sets has a choice function ([[def-countable-choice]]). This is an assumption of their development, not a property of a smooth structure. The finite coframe construction and uniqueness-based patching above require no additional choice principle.
