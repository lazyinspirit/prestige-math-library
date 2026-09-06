---
id: thm-relative-morse-smale-perturbation-of-a-gradient-like-field
kind: theorem
title: "Relative Morse--Smale perturbation of a gradient-like field"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morse-smale-pair, def-downward-gradient-like-vector-field, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, thm-parametric-transversality, thm-a-regular-level-set-is-an-embedded-submanifold]
proof_strategy: direct
sources:
  references:
    - title: "Michèle Audin and Mihai Damian, Morse Theory and Floer Homology, Theorem 2.2.5 and Lemma 2.2.8"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

Let $M$ be closed, let $f$ be Morse with pairwise distinct critical values, and let $X$ be a downward gradient-like field in its standard normal form on fixed sufficiently small Morse-coordinate balls with pairwise disjoint closures, each contained in a larger such coordinate chart.  There is an arbitrarily $C^1$-close downward gradient-like field $X'$ which equals $X$ on those balls and for which $(f,X')$ is Morse--Smale.

## Facts & Assumptions

**Given:** The stated distinct critical values and fixed small critical balls inside larger Morse charts, with $f=f(c)-|u|^2+|v|^2$ and $X=2u\partial_u-2v\partial_v$. The balls are small enough that the slightly larger charts have disjoint critical-value windows.

[F1] A compact Morse function has finitely many critical points ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

[F2] Parametric transversality gives transverse slices from a transverse finite-dimensional family ([[thm-parametric-transversality]]).

[F3] Regular levels are embedded hypersurfaces ([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

## Proof

**Proof technique:** direct.

1.1 Work componentwise.  A compact manifold has finitely many connected components, and [F1] gives finitely many critical points on each.  On a fixed component, order that component's critical values.  Its continuous image under $f$ is an interval, so every value chosen strictly between consecutive critical values is attained; it is regular because there is no critical value between them.  Thus its fibre is nonempty, and [F3] supplies the smooth level hypersurface.  These finitely many levels cut the components of $M$ into finitely many bands. [F1, F3, given]

2.1 On a component of positive dimension, write its critical points as $c_1,\ldots,c_N$ with $\alpha_1>\cdots>\alpha_N$, where $\alpha_j=f(c_j)$. Induct on the destination: after stage $j$, require $W^s(c_h)\pitchfork W^u(c_i)$ for every $h\leq j$ and every $i$. The assertion for $h=1$ is automatic, since a maximum has stable manifold consisting only of itself. For a general stage $j$, the case of a local maximum is automatic for the same reason. Otherwise the stable disk at $c_j$ has a compact sphere section $Q$ of dimension $\dim M-\lambda(c_j)-1$ at a level just above $\alpha_j$. Choose this section outside the fixed ball but inside its larger chart. A short flow collar of it lies above the fixed ball's maximum height, below $\alpha_{j-1}$, and outside every other fixed ball, by their disjoint height windows. [F1, step 1.1, given]

3.1 Let $L$ be the collar's upper regular level. The stable section $Q\subset L$ has a tubular product $Q\times D^{\lambda(c_j)}$, furnished by the unstable coordinates in the Morse chart and transport by the flow. Write $Q_w=Q\times\{w\}$ for small $w$. The evaluation $(q,w)\mapsto(q,w)\in L$ is a submersion. For each higher critical point $c_i$, the unstable slice $W^u(c_i)\cap L$ is an immersed manifold: local unstable disks are transported by finite-time flow, and the flow direction is transverse to $L$. Cover each such slice by countably many embedded immersion charts. Apply [F2] to the family $Q_w$ and each chart image. The union of the exceptional null sets is null, so there are arbitrarily small $w$ for which $Q_w$ is transverse to every higher unstable slice. For $\lambda(c_j)=0$, the stable manifold is open and this transversality already holds without a perturbation. [F2, F3, step 2.1, given]

4.1 Realize the chosen displacement by a field perturbation in the collar. In product flow coordinates $(q,u,z)$ with $X=-\partial_z$, bottom $z=0$, and top $z=T$, take a smooth function $\beta$ supported in $(0,T)$ with $\int_0^T\beta(z)\,dz=1$, and a cutoff $\chi(u)$ equal to one near zero and zero near the boundary of the normal disk. Put $$X_w=-\partial_z-\beta(z)\chi(u)\sum_\ell w_\ell\partial_{u_\ell}.$$ For small $w$, backward flow from $(q,0,0)$ stays where $\chi=1$ and reaches $(q,w,T)$. Thus the stable sphere at the upper section becomes precisely $Q_w$. The perturbation is zero near the entire collar boundary, extends smoothly by $X$, and tends to zero in $C^1$ with $w$. It preserves the fixed critical balls. [step 3.1, given, algebra]

5.1 All higher unstable slices at $L$ are unchanged: their backward trajectories lie above $L$, whereas the perturbation is below $L$. Hence step 3.1 gives the desired transversality for destination $c_j$. Every trajectory from a higher critical point to $c_j$ crosses $L$, and flow transports this tangent-space condition along it. For each earlier destination $c_h$, $h<j$, its stable manifold lies in $\{f\geq\alpha_h\}$, entirely above the perturbation. At any intersection there, the backward trajectory defining the unstable manifold also stays in this unchanged superlevel region. Thus both tangent manifolds at every previously established intersection are unchanged. This proves the induction invariant of step 2.1. [step 2.1, step 3.1, step 4.1, algebra]

6.1 There are finitely many stages and components, so choose each parameter within a finite $C^1$ error budget. On the compact collar supports $df(X)<0$ has a strict margin, so sufficiently small choices retain $df(X_w)<0$; on the fixed balls the exact local normal form is untouched. Closedness gives completeness. Self-intersections at a critical point have complementary stable/unstable tangent spaces, and strict descent excludes other identical-endpoint or reversed-value connections. Cross-component intersections are empty. Zero-dimensional components require no perturbation. Thus the final field is arbitrarily $C^1$-close, agrees on all fixed balls, and is Morse--Smale. [step 2.1, step 4.1, step 5.1, given] ∎
