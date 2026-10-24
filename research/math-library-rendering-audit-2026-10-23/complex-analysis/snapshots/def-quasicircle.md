---
id: def-quasicircle
kind: definition
title: Quasicircles, quasidisks, quasiarcs, and quasilines
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-acl-sobolev-quasiconformal-homeomorphism
  - def-axiom-of-choice
  - def-circle-as-real-line-mod-integers
  - def-geometric-quasiconformal-homeomorphism
  - def-homeomorphism-and-open-maps
  - def-mobius-transformation
  - def-riemann-sphere-holomorphic-charts
  - rem-riemann-sphere-one-point-compactification
  - thm-composition-and-inverse-quasiconformal
  - thm-jordan-brouwer-separation
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: The Axiom of Choice is assumed through the analytic quasiconformal interface and the Jordan–Brouwer separation theorem. The referenced geometric convention carries Countable Choice for modulus; AC implies it. The definitions themselves make no selections.
sources:
  scraped: []
  references:
    - title: "Frederick W. Gehring, Characterizations of quasidisks, Banach Center Publications 48 (1999)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S25/Characterizations_of_quasidisks.pdf"
      locator: "§I.A–B, printed pp. 12–15: quasiconformal definitions and quasidisks as images of a disk or half-plane under a quasiconformal sphere self-map; read in full."
    - title: "Gaven J. Martin, Stream lines, quasilines and holomorphic motions, Complex Analysis and its Synergies 1 (2015), article 5"
      url: "https://link.springer.com/article/10.1186/s40627-015-0003-5"
      locator: "§1, paragraph beginning ‘A quasi-arc, respectively quasiline, quasicircle’: quasiarcs are quasiconformal images of a line segment, quasilines of the real line, and quasicircles of the round circle; the K-prefix convention."
dependency_level: 9
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Assume the Axiom of Choice. Write $\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$ for the Riemann sphere with its standard holomorphic charts ([[rem-riemann-sphere-one-point-compactification]], [[def-riemann-sphere-holomorphic-charts]]). Put $\mathbb T=\{z\in\mathbb C:|z|=1\}$ and $\mathbb D=\{z\in\mathbb C:|z|<1\}$. Identify the quotient circle $\mathbb S^1=\mathbb R/\mathbb Z$ with $\mathbb T$ by $[t]\mapsto e^{2\pi i t}$ ([[def-circle-as-real-line-mod-integers]], [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]). A **Jordan curve** in $\widehat{\mathbb C}$ is the image of a topological embedding $\mathbb S^1\hookrightarrow\widehat{\mathbb C}$ ([[def-homeomorphism-and-open-maps]]); by [[thm-jordan-brouwer-separation]] it has exactly two complementary components with common boundary. A sphere homeomorphism is **$K$-quasiconformal** if it preserves the standard complex orientation ([[def-geometric-quasiconformal-homeomorphism]]) and, in every connected holomorphic chart neighborhood, its coordinate expression is $K$-quasiconformal in the analytic sense ([[def-acl-sobolev-quasiconformal-homeomorphism]]); $K\ge1$ is a uniform upper bound for the local dilatations.

(a) A Jordan curve $\Gamma\subseteq\widehat{\mathbb C}$ is a **$K$-quasicircle** if $\Gamma=F(\mathbb T)$ for a $K$-quasiconformal sphere homeomorphism $F$. It is a **quasicircle** if it is a $K$-quasicircle for some finite $K$. Its **quasicircle constant** is
$$K(\Gamma)=\inf\{K\ge1:\Gamma=F(\mathbb T)\text{ for some }K\text{-quasiconformal sphere homeomorphism }F\}.$$
The infimum is not asserted to be attained.

(b) A domain $U\subseteq\widehat{\mathbb C}$ is a **$K$-quasidisk** if $U=G(\mathbb D)$ for a $K$-quasiconformal sphere homeomorphism $G$; it is a quasidisk if this holds for some finite $K$. The two complementary components of a $K$-quasicircle are $K$-quasidisks.

(c) A **$K$-quasiarc** is the image of the open line segment $(-1,1)\subset\mathbb C$ under a $K$-quasiconformal homeomorphism of $\mathbb C$; a **quasiarc** is a $K$-quasiarc for some finite $K$. A **$K$-quasiline** is the image of $\mathbb R$ under a $K$-quasiconformal homeomorphism of $\mathbb C$; a **quasiline** is a $K$-quasiline for some finite $K$.

(d) Quasicircles are Möbius invariant with unchanged constant: for every Möbius transformation $M$,
$$K(M(\Gamma))=K(\Gamma).$$

## Facts & Assumptions

**Given:** the unit circle $\mathbb T$, the unit disk $\mathbb D$, and the chartwise analytic definition of quasiconformality on the sphere.

[F1] The map $[t]\mapsto e^{2\pi i t}$ is a homeomorphism from $\mathbb S^1=\mathbb R/\mathbb Z$ onto $\mathbb T$ ([[def-circle-as-real-line-mod-integers]], [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]).

[F2] A Jordan curve in the sphere has exactly two complementary components, and the curve is the common boundary of both ([[thm-jordan-brouwer-separation]]).

[F3] Every Möbius transformation is biholomorphic on the sphere, hence conformal in its holomorphic charts, and its inverse is also Möbius ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]]).

[F4] Composition with a conformal map preserves the quasiconformal upper bound, and inverses of conformal maps are conformal ([[thm-composition-and-inverse-quasiconformal]]).

[F5] The orientation-preserving convention for a quasiconformal homeomorphism is the one in [[def-geometric-quasiconformal-homeomorphism]].

## Proof

**Proof technique:** direct, using Jordan separation and quasiconformal composition.

1.1 Let $F$ be an orientation-preserving $K$-quasiconformal sphere homeomorphism and set $\Gamma=F(\mathbb T)$. By [F1], $F$ composed with the standard parametrization of $\mathbb T$ is an embedding, so $\Gamma$ is a Jordan curve. The identity $\widehat{\mathbb C}\setminus\Gamma=F(\mathbb D)\sqcup F(M(\mathbb D))$ holds because $F$ is a bijection; both sets are open, nonempty and connected, so each is a complementary component (also as specified by [F2]). Here $M(z)=1/z$ exchanges $\mathbb D$ and the exterior component of $\mathbb T$. The first component is a $K$-quasidisk by definition; [F3]–[F5] show that $F\circ M$ is orientation-preserving and $K$-quasiconformal, so the second is also a $K$-quasidisk. [F1, F2, F3, F4, F5, algebra]

2.1 If $\Gamma=F(\mathbb T)$ is a $K$-quasicircle and $N$ is Möbius, then $N(\Gamma)=(N\circ F)(\mathbb T)$; [F3]–[F5] show it is again a $K$-quasicircle. Applying the same argument to $N^{-1}$ proves the reverse implication, so the admissible sets of constants for $\Gamma$ and $N(\Gamma)$ are identical and their infima agree. [F3, F4, F5, algebra] ∎
