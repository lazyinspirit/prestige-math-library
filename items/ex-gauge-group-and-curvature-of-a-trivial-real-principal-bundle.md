---
id: ex-gauge-group-and-curvature-of-a-trivial-real-principal-bundle
kind: example
title: Gauge action on a trivial real principal bundle and associated line
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
axiom_base: "ZF + AC_omega is inherited through the smooth principal-connection convention; the explicit example calculation makes no choices."
deps:
  - def-smooth-principal-g-bundle
  - def-principal-connection-and-vertical-curvature
  - def-gauge-group-of-a-smooth-principal-bundle
  - prop-gauge-transformations-act-on-principal-connections
  - def-associated-bundle-to-a-principal-bundle-and-representation
  - thm-associated-vector-bundle-is-well-defined
  - prop-gauge-transformations-induce-associated-bundle-automorphisms
  - def-countable-choice
  - def-lie-bracket-of-smooth-vector-fields
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "D. Husemöller, M. Joachim, B. Jurčo, and M. Schottenloher, Basic Bundle Theory and K-Cohomology Invariants"
      url: "https://www.mathematik.uni-muenchen.de/~schotten/Texte/978-3-540-74955-4_Book_LNP726corr1.pdf"
      locator: "Part I, Chapter 5, §5.6, printed p. 62 (PDF p. 77), principal-bundle automorphisms over the identity."
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/pdf/2110.06334"
      locator: "Chapter 1, §1.3, printed pp. 32–36 (PDF pp. 31–35), principal connections and curvature; Chapter 2, §2.1, printed pp. 53–54 (PDF pp. 52–53), gauge terminology."
    - title: "Jack Smith, Differential Geometry, Cambridge Part III Michaelmas 2022 lecture notes taken by Leonard Tomczak"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/DG_Notes.pdf"
      locator: "Chapter 9, §§9.3–9.4, printed pp. 43–44 (PDF pp. 42–43)."
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 1, §1.6, Lemma 1.6.2 and Example 1.6.4, printed pp. 14–15 (PDF pp. 17–18)."
---

## Example

Let $M=\mathbb R^2$ with coordinates $(x,y)$, let $G=(\mathbb R,+)$, and
let $P=M\times\mathbb R$ with projection $(x,y,t)\mapsto(x,y)$ and right
action $(x,y,t)s=(x,y,t+s)$. Then
$$\mathcal G(P)\cong C^\infty(\mathbb R^2,\mathbb R)$$
as groups under addition, by $u\mapsto\Phi_u$ with
$\Phi_u(x,y,t)=(x,y,t+u(x,y))$. A nonconstant gauge transformation can move a
connection while carrying its curvature: for
$$H=\operatorname{span}\{X=\partial_x,\;Y=\partial_y-x\partial_t\},$$
the curvature is $K_H(X,Y)=\partial_t$. The transformation $u(x,y)=x$ sends
$X$ to $X+\partial_t$ and $Y$ to $Y$, and the pushed connection has the same
vertical curvature value.

For the smooth representation $\rho(s)=e^s$ of $(\mathbb R,+)$ on $\mathbb R$,
the associated line bundle $E_\rho=P\times_\rho\mathbb R$ is trivial, with
global vector-bundle coordinates $[(x,y,t),v]\mapsto(x,y,e^t v)$. In these
coordinates the induced map of $\Phi_u$ is
$$\overline\Phi_u(x,y,v)=(x,y,e^{u(x,y)}v).$$
Thus the gauge group acts linearly on the smooth sections of this associated
line bundle, and the nonconstant choice $u(x,y)=x$ multiplies a section by
$e^x$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $M=\mathbb R^2$, $G=(\mathbb R,+)$,
$P=M\times\mathbb R$, its product projection, and standard right action.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ asserts that every
countable family of nonempty sets has a choice function; it is inherited here
from the declared smooth tangent-bundle convention.

[F1] [[def-smooth-principal-g-bundle]]: a smooth principal bundle has a smooth
projection and right action, together with equivariant smooth local product
charts.

[F2] [[def-principal-connection-and-vertical-curvature]]: a principal
connection is a right-invariant horizontal complement to $VP$, with
$K_H(X,Y)=-v([hX,hY])$.

[F3] [[def-gauge-group-of-a-smooth-principal-bundle]]: gauge transformations
are smooth principal-bundle diffeomorphisms covering the identity of $M$.

[F4] [[prop-gauge-transformations-act-on-principal-connections]]: pushforward
by a gauge transformation preserves a principal connection and carries its
curvature by the differential of that gauge transformation.

[F5] [[def-associated-bundle-to-a-principal-bundle-and-representation]]: the associated line is the quotient with relation $[p s,v]=[p,e^s v]$.

[F6] [[thm-associated-vector-bundle-is-well-defined]]: principal local sections give smooth associated vector-bundle charts.

[F7] [[prop-gauge-transformations-induce-associated-bundle-automorphisms]]: $[p,v]\mapsto[\Phi(p),v]$ is the induced smooth bundle automorphism and gives a linear action on smooth sections.

[L1] [[def-lie-bracket-of-smooth-vector-fields]]: $[A,B]f=A(Bf)-B(Af)$.

## Verification

1.1 The product projection and right-translation action are smooth, the identity product chart is equivariant, and each fibre is the free transitive right $(\mathbb R,+)$-torsor; therefore [F1] makes $P$ a smooth principal bundle. [F1, given]

2.1 A gauge transformation has the form $\Phi(x,y,t)=(x,y,\tau(x,y,t))$; equivariance gives $\tau(x,y,t+s)=\tau(x,y,t)+s$, so $u(x,y):=\tau(x,y,0)$ is smooth and $\tau=t+u$. Conversely each smooth $u$ gives $\Phi_u$ with inverse $\Phi_{-u}$, and $\Phi_u\circ\Phi_v=\Phi_{u+v}$, proving the asserted group isomorphism. [F3, given, construct, step 1.1]

2.2 Define $\rho(s)=e^s$, a smooth homomorphism to $\operatorname{GL}_1(\mathbb R)$. By [F5] the map $[(x,y,t),v]\mapsto(x,y,e^t v)$ is well-defined, with inverse $(x,y,w)\mapsto[(x,y,0),w]$; it is the global associated chart supplied by [F6]. [F5, F6, given, step 1.1]

2.3 The vertical bundle is spanned by $\partial_t$, while $X,Y$ project to $\partial_x,\partial_y$; their span complements the vertical direction and is invariant under $t$-translations, so [F2] makes $H$ a principal connection. By [L1], $[X,Y]=[\partial_x,\partial_y-x\partial_t]=-\partial_t$, hence $K_H(X,Y)=\partial_t$. [A1, F2, L1, given, step 1.1]

3.1 By [F7], $\Phi_u$ induces an associated bundle automorphism. In the coordinates of step 2.2 it sends $[(x,y,t),v]$ to $[(x,y,t+u(x,y)),v]$, hence $(x,y,v)\mapsto(x,y,e^{u(x,y)}v)$; the section $s_0(x,y)=[(x,y,0),1]$ is sent to $e^u s_0$. [F7, step 2.1, step 2.2, algebra]

3.2 For $u(x,y)=x$, $d\Phi_u$ sends $X$ to $X+\partial_t$ and $Y$ to $Y$. The pushed connection is principal by [F4], and [L1] gives $[X+\partial_t,Y]=-\partial_t$, so $K_{\Phi_{u*}H}(X+\partial_t,Y)=\partial_t=\Phi_{u*}K_H(X,Y)$. The horizontal subspace changes, so this nonconstant gauge map moves the connection while carrying its curvature. [F2, F4, L1, step 2.1, step 2.3]

4.1 The zero gauge function gives the identity on the connection, curvature, associated bundle, and its sections. A constant $u=c$ has identity differential and leaves $H$ and its curvature fixed, while its associated bundle map is scalar multiplication by $e^c$ in the coordinates of step 2.2. [F7, step 2.1, step 2.2, step 2.3, step 3.1, algebra] ∎
