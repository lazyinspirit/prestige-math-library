---
id: lem-continuation-energy-identity
kind: lemma
title: "The continuation energy identity"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-regular-continuation-datum-between-morse-smale-pairs, lem-continuation-solutions-have-critical-limits, def-riemannian-gradient-of-a-smooth-function, lem-negative-gradient-energy-identity, def-morse-smale-pair, def-countable-choice]
justified_by: []
dependency_level: 2
proof_strategy: direct
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (3): the a priori energy estimate E(v) <= f^-(p^-)-f^+(q^+)+2S max_x |partial_s f_s(x)|, PDF p. 93"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 2.5: the derivation of the energy drop along a tunnelling, read at PDF pp. 72-73"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.4: the construction of the corrected function F~ with the quantitative energy control, printed pp. 73-75, PDF pp. 83-85"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the smooth-bundle setup. Let $(f_s,g_s)$ be a continuation datum from $(f^-,g^-)$ to $(f^+,g^+)$ on a
closed manifold $M$, and let $u$ be a solution of the continuation equation
with limits $p\in\operatorname{Crit}(f^-)$, $q\in\operatorname{Crit}(f^+)$
([[def-regular-continuation-datum-between-morse-smale-pairs]],
[[lem-continuation-solutions-have-critical-limits]]). Write
$E(u)=\int_{\mathbb R}|\partial_su(s)|_{g_s}^2\,ds$ and
$(\partial_sf_s)(x)=\frac{\partial f_s}{\partial s}(x)$. Then
$$E(u)=f^-(p)-f^+(q)+\int_{\mathbb R}(\partial_sf_s)(u(s))\,ds.$$
Since $\partial_sf_s=0$ on $M\times\bigl((-\infty,-S]\cup[S,\infty)\bigr)$
and $(\partial_sf_s)(u(s))$ is integrable by smoothness and compact support, in particular
$$0\le E(u)\le f^-(p)-f^+(q)+2S\max_{(s,x)\in[-S,S]\times M}\bigl|(\partial_sf_s)(x)\bigr|.$$
For a constant datum ($f_s=f$, $g_s=g$ for all $s$) the identity reduces to
the classical energy identity $\int_{\mathbb R}|\dot u|^2=f(p)-f(q)$ of
[[lem-negative-gradient-energy-identity]].

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a closed manifold $M$, a continuation datum $(f_s,g_s)$ with threshold $S>0$, and a solution $u$ of the continuation equation with limits $p,q$.

[F1] The datum is constant on the two half-lines: $(f_s,g_s)=(f^-,g^-)$ for $s\le-S$ and $(f_s,g_s)=(f^+,g^+)$ for $s\ge S$ ([[def-regular-continuation-datum-between-morse-smale-pairs]]).

[F2] The gradient is characterized by $g_s(\nabla^{g_s}f_s,v)=df_s(v)$ for every $v$, so along a solution $df_s(\partial_su)=g_s(\nabla^{g_s}f_s(u),\partial_su)=-|\partial_su|_{g_s}^2$ ([[def-riemannian-gradient-of-a-smooth-function]]).

[F3] The stated limits and continuity give $f^-(u(s))\to f^-(p)$ and $f^+(u(s))\to f^+(q)$. The function $(\partial_sf_s)(u(s))$ is smooth and supported in $[-S,S]$, hence integrable. These facts use the given limits, not a choice-dependent existence or exponential-decay theorem.

[F4] Along an autonomous negative-gradient curve, $\frac{d}{ds}f(u)=-|\dot u|^2$ ([[lem-negative-gradient-energy-identity]]). Integrating on finite intervals and taking the given limits yields $\int_{\mathbb R}|\dot u|^2=f(p)-f(q)$, including constant curves.

## Proof

**Proof technique:** direct.

1.1 The curve $s\mapsto f_s(u(s))$ is smooth, and differentiating it gives $\frac{d}{ds}(f_s\circ u)=df_s(\partial_su)+(\partial_sf_s)(u)$, the two terms being the derivatives through the second argument and through the explicit $s$-dependence of $f_s$. [given, algebra]

2.1 Substituting the continuation equation $\partial_su=-\nabla^{g_s}f_s(u)$ into [F2] gives $df_s(\partial_su)=-|\partial_su|_{g_s}^2$; combining with step 1.1 yields $\frac{d}{ds}(f_s\circ u)=-|\partial_su|_{g_s}^2+(\partial_sf_s)(u)$. [F2, step 1.1, algebra]

3.1 Integrate step 2.1 over $[-S',S']$ and apply the fundamental theorem of calculus: $f_{S'}(u(S'))-f_{-S'}(u(-S'))=-\int_{-S'}^{S'}|\partial_su|_{g_s}^2\,ds+\int_{-S'}^{S'}(\partial_sf_s)(u(s))\,ds$. [step 2.1, algebra]

4.1 By [F3] the endpoints converge, $f_{-S'}(u(-S'))=f^-(u(-S'))\to f^-(p)$ and $f_{S'}(u(S'))=f^+(u(S'))\to f^+(q)$, while the integral of $(\partial_sf_s)(u(s))$ is already constant for $S'>S$. The identity of step 3.1 therefore makes the nonnegative integrals $\int_{-S'}^{S'}|\partial_su|_{g_s}^2$ converge to a finite limit as $S'\to\infty$; by the definition of the improper integral, this gives $E(u)=f^-(p)-f^+(q)+\int_{\mathbb R}(\partial_sf_s)(u(s))\,ds$. [F1, F3, step 3.1]

5.1 By [F1] the integrand $(\partial_sf_s)(u(s))$ vanishes off $[-S,S]$, so its integral is bounded by $2S\max_{[-S,S]\times M}|(\partial_sf_s)|$, and $E(u)\ge0$ by definition; this gives the displayed two-sided bound. For a constant datum $(\partial_sf_s)=0$ and step 4.1 becomes exactly [F4]. [F1, F4, step 4.1, algebra] ∎
