---
id: thm-continuation-trajectories-are-compact-up-to-breaking
kind: theorem
title: "Continuation trajectories are compact up to breaking"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-broken-continuation-trajectory, def-regular-continuation-datum-between-morse-smale-pairs, lem-continuation-energy-identity, lem-continuation-solutions-have-critical-limits, lem-metric-end-flow-matching-gives-local-broken-charts, thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points, lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits, cor-second-order-taylor-expansion-with-the-hessian, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, thm-metric-compactness-equivalences, cor-equicontinuous-families-into-a-compact-metric-target, thm-time-dependent-vector-fields-have-local-smooth-evolution-operators, def-morse-smale-pair, def-axiom-of-choice, def-nondegenerate-critical-point-nullity-index-and-coindex, def-compact-space, def-metrizable-space, def-second-countable-space, lem-compact-metric-space-has-a-countable-dense-subset]
justified_by: []
dependency_level: 5
proof_strategy: direct
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (3): proof of compactness and boundary shape of C(p^-,q^+) and the two breaking cases, PDF pp. 92-93"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Sec. 1.2, Exercise 1: every sequence in the compactified moduli space has a convergent subsequence, and the boundary formula for m^V(p_1,p_0), pp. 1-3"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 4.4, Proposition 4.4.2 (compactness of the space of broken tunnelings) and the convergence convention, read at PDF pp. 193-194"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.2.b-c: compactness up to breaking and the manifold-with-boundary structure, printed pp. 63-68, PDF pp. 73-78"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f_s,g_s)$ be a
regular continuation datum from $(f^-,g^-)$ to $(f^+,g^+)$ on a closed manifold
$M$ and let $p\in\operatorname{Crit}(f^-)$,
$q\in\operatorname{Crit}(f^+)$
([[def-regular-continuation-datum-between-morse-smale-pairs]],
[[def-morse-smale-pair]]).

1. Every sequence in $\mathcal C(p,q)$ has a subsequence converging
   geometrically ([[def-broken-continuation-trajectory]]) to a broken
   continuation trajectory $\beta\in\overline{\mathcal C}(p,q)$; the number of
   tail pieces of $\beta$ is bounded by the index drop
   $\operatorname{ind}(p)-\operatorname{ind}(q)$
   ([[def-nondegenerate-critical-point-nullity-index-and-coindex]]).
2. $\overline{\mathcal C}(p,q)$, with the geometric-convergence topology, is a
   compact, metrizable and second-countable space in which $\mathcal C(p,q)$ is
   open and dense.
3. If $\operatorname{ind}(p)=\operatorname{ind}(q)$, then $\mathcal C(p,q)$ is
   compact and zero-dimensional, hence finite.
4. If $\operatorname{ind}(p)-\operatorname{ind}(q)=1$, then every boundary
   point of $\overline{\mathcal C}(p,q)$ is either of the form
   $(\gamma^-,v)\in\mathcal M^-(p,a)\times\mathcal C(a,q)$ with
   $\operatorname{ind}(a)=\operatorname{ind}(q)$, or of the form
   $(v,\gamma^+)\in\mathcal C(p,b)\times\mathcal M^+(b,q)$ with
   $\operatorname{ind}(b)=\operatorname{ind}(p)$; each of the sets
   $\mathcal M^-(p,a)$ and $\mathcal M^+(b,q)$ is finite
   (by the compactness argument below), and these
   once-broken configurations are the only points of
   $\overline{\mathcal C}(p,q)\smallsetminus\mathcal C(p,q)$.

The same proof supplies the following pointed autonomous-tail interface for either actual metric end. Extend a height-parametrized half-tail constantly past its moving finite endpoint, and past its critical endpoint. All these paths have a common modulus $C\sqrt\delta$ on height intervals of length $\delta$. Every sequence has a uniform subsequential limit that splits at each critical point actually hit into full trajectories and the final pointed segment. Full trajectories with fixed critical endpoints have the same height compactification and extraction, and rigid index-drop-one end orbit spaces are finite. No normalized Morse-coordinate vector field is assumed in this interface.

## Facts & Assumptions

**Given:** The Axiom of Choice, the closed manifold, regular continuation datum with window $[-S,S]$, and fixed critical endpoints $p,q$.

[F1] Actual metric-gradient trajectories have critical limits; actual metric stable/unstable disks have the Morse dimensions and exponentially decaying tangent variations. A Morse function on the compact manifold has finitely many critical points ([[lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits]], [[thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points]], [[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

[F2] The energy is uniformly bounded, the middle solves a fixed smooth evolution equation, and its finite-window fibre product is transverse with dimension $\operatorname{ind}(a)-\operatorname{ind}(b)$ at middle endpoints $a,b$ ([[lem-continuation-energy-identity]], [[def-regular-continuation-datum-between-morse-smale-pairs]], [[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]]).

[F3] A smooth Morse function has a nonsingular Hessian and a second-order Taylor expansion in local coordinates ([[cor-second-order-taylor-expansion-with-the-hessian]]).

[F4] Uniformly equicontinuous maps from a compact interval into a compact metric target have uniformly convergent subsequences; sequential compactness is compactness in a metric space ([[cor-equicontinuous-families-into-a-compact-metric-target]], [[thm-metric-compactness-equivalences]]).

[F5] Finite broken metric-end configurations with a regular middle have local flow-matching charts, including all positive neck coordinates and inverse coverage ([[lem-metric-end-flow-matching-gives-local-broken-charts]]). The middle is unshifted and the geometric convergence convention includes its compact-time convergence and independent autonomous tail shifts ([[def-broken-continuation-trajectory]]).

## Proof

**Proof technique:** direct, using pointed tail height paths and an unshifted middle window.

1.1 Fix a background metric. For either end function $f$, let $V$ be its finite set of critical values. Near a critical point with coordinate $z=0$, nonsingularity of its Hessian and smooth metric give $|\operatorname{grad}f(z)|\ge c|z|$ after shrinking the chart: the derivative of $\operatorname{grad}f$ at zero is nonsingular, so its linear term has a positive least singular value and its remainder is $o(|z|)$. By [F3], $|f(z)-f(0)|\le C|z|^2$. Hence $|\operatorname{grad}f(z)|\ge c'\sqrt{|f(z)-f(0)|}\ge c'\sqrt{\operatorname{dist}(f(z),V)}$. On the compact complement of these finitely many charts the gradient has a positive lower bound; enlarge the constant to obtain globally $1/|\operatorname{grad}f(z)|\le C_f/\sqrt{\operatorname{dist}(f(z),V)}$ wherever the right-hand side is finite. Chart and metric norm comparisons are uniform. A height-parametrized gradient orbit consequently has speed at most this integrable function. Over an interval of length $\delta$, the integral is at most $C'_f\sqrt\delta$, by splitting at the finitely many nearest-critical-value regions and integrating $|a-v|^{-1/2}$. This gives a uniform modulus for all full or truncated end trajectories, without a normalized vector-field assumption. [F1, F3, given, algebra]

2.1 Choose an interval $I^-$ containing the range of $f^-$ and an interval $I^+$ containing that of $f^+$. For a negative half-tail ending at $x=u(-S)$, parametrize its image by descending $f^-$ height on $[f^-(x),f^-(p)]$, and extend it constantly by $x$ below that interval and by $p$ above it. Do the analogous construction for the positive half-tail from $y=u(S)$ to $q$, extending constantly by $y$ above $f^+(y)$ and by $q$ below $f^+(q)$. For a broken tail concatenate its height pieces, retaining the critical point at every break. Assign a broken continuation the triple of these two pointed height paths and its middle on $[-S,S]$. Step 1.1 makes both tail families uniformly equicontinuous, including at moving noncritical endpoints. The middle family has a uniform velocity bound on the compact window by [F2]. Thus [F4] gives a convergent subsequence of triples for every sequence, either ordinary or already broken. [F2, F4, step 1.1, construct]

3.1 The uniform middle limit $v$ solves the same evolution equation: use convergence of its initial point and the smooth finite-time evolution of [F2]. Extend it to the whole real line with the fixed autonomous ends. By [F1] these tails have critical limits $a,b$. The identity $f(h(c))=c$ survives the uniform limit on the interior pointed height interval; only the prescribed endpoint extensions are constant. For a limiting height path, on any compact height interval where its image is noncritical the height equation $dh/dc=X(h)/df(X)(h)$ has a smooth right-hand side near the image. Uniform convergence of the paths and that right-hand side passes its integral equation to the limit. The path therefore consists there of an actual end orbit. Split at each critical point actually met by the limiting path, rather than merely at every critical value; there are only finitely many such points, since a fixed height has one image and height strictly decreases along every nonconstant piece. Uniqueness prevents an orbit from reaching a critical point in finite time. The pieces between successive actual critical hits are therefore full critical-to-critical trajectories, and the last negative and first positive pointed segments coincide with the corresponding tails of $v$ by their endpoint value at $-S$ or $S$ and finite-time uniqueness. Constant pointed segments are allowed when those endpoint values are critical. This produces the required broken continuation from $p$ to $q$. [F1, F2, step 2.1]

4.1 Each nonconstant end trajectory has positive index drop. Indeed, the actual metric disks in [F1] and Morse--Smale transversality give a transverse intersection of dimension $\operatorname{ind}(c)-\operatorname{ind}(d)$; its nonzero flow tangent forces that dimension to be at least one. The regular middle dimension of [F2] is nonnegative when it is nonempty. Telescoping these drops gives the bound $N\le\operatorname{ind}(p)-\operatorname{ind}(q)$ for the extracted tail pieces, precisely the incidence and time-order data of [F5]. At every acquired break the respective crossing-time separation tends to infinity: otherwise a bounded-time subsequence would join the two noncritical transversal representatives through the critical point in finite time, contradicting uniqueness. On fixed intervals about those crossing times, smooth finite-time dependence gives convergence to each tail piece. The middle was never shifted. Hence the extraction is geometric convergence in the stated sense. [F1, F2, F5, step 3.1]

5.1 The triple determines the broken object uniquely. Its middle determines the pointed endpoints, and each height curve splits uniquely at its actual critical hits into its orbit pieces, taken modulo autonomous translation. Conversely geometric convergence gives uniform triple convergence: on compact noncritical subintervals it follows from transversal crossings and finite-time evolution; on sufficiently small intervals about critical heights it follows from the common square-root modulus of step 1.1. The middle converges on its fixed window. The same transversal argument of step 4.1 proves the reverse implication for a uniformly converging sequence of triples. These arguments apply to converging broken sequences as well, splitting at every newly acquired critical hit. Thus the geometric topology is exactly the subspace uniform topology of the triple image. One can also read this directly on the local charts of [F5], whose crossing coordinates and inverse are continuous in both descriptions. [F2, F4, F5, step 1.1, step 4.1]

6.1 By steps 2.1–4.1 every sequence in the triple image has a subsequence whose limit is in that image. The image is therefore sequentially compact in the product uniform metric and hence compact by [F4]. Step 5.1 transfers that metric and compactness to the geometric compactification. A compact metric space has a countable dense subset; balls of rational radius about its points give a countable base ([[lem-compact-metric-space-has-a-countable-dense-subset]]). The unbroken locus is open: at an unbroken triple its height paths have no internal critical hit, and local finite-time endpoint charts exclude extra breaks, while near its critical endpoints the fixed endpoint unstable/stable immersion charts apply. Equivalently it is the zero-neck-count chart of [F5]. At every broken object the local chart of [F5] has points with all neck coordinates positive converging to that object, which proves density. [F4, F5, step 2.1, step 4.1, step 5.1]

7.1 If the endpoint indices agree, step 4.1 permits no tail piece, so every limit is unbroken. The space is compact and is a zero-dimensional smooth manifold by [F2]. Its singleton neighbourhoods form an open cover; compactness gives a finite subcover, proving finiteness. The identical argument applied to full autonomous orbit classes with index drop one gives finite metric-end rigid trajectory sets: use a height path with fixed critical endpoints, the modulus and extraction of steps 1.1–4.1, and the transverse index dimension minus the free nonzero flow direction. No broken limit is possible at drop one. This proves the metric-end finiteness used in the statement, without promoting a normalized-field supplier beyond its hypotheses. [F1, F2, F4, step 1.1, step 4.1, step 6.1]

8.1 If the endpoint index difference is one, the same telescoping identity permits exactly one autonomous tail piece and a middle of index difference zero at a broken object. A negative break has $\operatorname{ind}(a)=\operatorname{ind}(q)$; a positive break has $\operatorname{ind}(b)=\operatorname{ind}(p)$. The relevant tail spaces are finite by step 7.1. Step 6.1 identifies the remaining objects as precisely the added broken locus; its one-neck local charts are the boundary charts, while the unbroken dimension is one. Thus these two once-broken patterns are exactly the boundary configurations asserted. [F1, F2, F5, step 4.1, step 6.1, step 7.1] ∎
