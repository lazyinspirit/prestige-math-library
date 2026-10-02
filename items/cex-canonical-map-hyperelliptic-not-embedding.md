---
id: cex-canonical-map-hyperelliptic-not-embedding
kind: counterexample
title: "The canonical map of a hyperelliptic curve is not an embedding"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-canonical-degree-two-g-minus-two
  - cor-h0-canonical-differentials-genus
  - cor-birational-smooth-proper-curves-isomorphic
  - def-base-point-linear-system
  - def-closed-immersion-schemes
  - def-axiom-of-choice
  - def-complete-linear-system
  - def-gonality-curve
  - def-hyperelliptic-curve
  - def-nonconstant-morphism-curves-degree
  - def-relative-projective-space-standard-charts
  - lem-veronese-map-well-defined-closed-immersion
  - thm-base-point-free-linear-system-morphism
  - thm-canonical-map-nonhyperelliptic-curve
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02

---

## Statement refuted

Assume AC, as required by the cited canonical-map theorem. For a smooth proper
geometrically integral curve $C$ of genus $g\ge2$,
geometric hyperellipticity prevents the canonical map from being a closed
immersion. After extending to an algebraic closure, the canonical map factors
through a degree-two map to $\mathbf P^1$ and the $(g-1)$-fold Veronese
embedding. It has generic degree two onto a rational normal curve; its generic
geometric fiber has two distinct points, which the canonical map identifies.
This does not assert that every closed fiber has two distinct points. If the
degree-two map is defined over $k$ with target $\mathbf P^1_k$, the same
factorization holds over $k$.

## Facts & Assumptions

**Given:** AC, a field $k$, a smooth proper geometrically integral curve
$C/k$ of genus $g\ge2$, and, after base extension to $\bar k$, a degree-two map
$\varphi:C_{\bar k}\to\mathbf P^1_{\bar k}$. In the split case the map may
already be given over $k$.

[F1] The degree-two map is finite and surjective, and
$L=\varphi^*\mathcal O_{\mathbf P^1}(1)$ has degree two.
([[def-hyperelliptic-curve]], [[def-nonconstant-morphism-curves-degree]])

[F2] The canonical bundle and canonical map commute with field extension. The
canonical bundle is generated for $g\ge2$, and the degree-two map gives
$L^{\otimes(g-1)}\cong\omega_{C_{\bar k}}$; the canonical map is the
composition of $\varphi$ with the $(g-1)$-fold Veronese map.
([[thm-canonical-map-nonhyperelliptic-curve]],
[[thm-base-point-free-linear-system-morphism]])

[F3] $h^0(C,\omega_C)=g$ and $\deg\omega_C=2g-2$.
([[cor-h0-canonical-differentials-genus]],
[[cor-canonical-degree-two-g-minus-two]])

[F4] The Veronese map is a closed immersion. The actual target
$\mathbf P^1_{\bar k}$ is reduced, since its standard affine charts have
polynomial-domain coordinate rings. A closed immersion into this target that
is surjective on points is an isomorphism: on each affine chart its defining
ideal lies in every prime, hence in the nilradical, which is zero.
([[lem-veronese-map-well-defined-closed-immersion]],
[[def-closed-immersion-schemes]],
[[def-relative-projective-space-standard-charts]])

[F5] Smooth proper birational curves over a field are isomorphic.
([[cor-birational-smooth-proper-curves-isomorphic]])

## Counterexample

Let $C/k$ be as in the given data. By [F2], after base extension the
canonical map is
$$\varphi_{K,\bar k}=v_{g-1}\circ\varphi,$$
where $v_{g-1}:\mathbf P^1_{\bar k}\to\mathbf P^{g-1}_{\bar k}$ is the
Veronese closed immersion. Its image is a rational normal curve, and the
composite has generic degree two. If the composite were a closed immersion,
then $\varphi$ would be a closed immersion into the Veronese image: the
surjection on coordinate rings for the composite factors through the
coordinate ring of that image, which is isomorphic to the reduced scheme
$\mathbf P^1_{\bar k}$. Since $\varphi$ is also finite and surjective,
[F4] would make it an isomorphism, contradicting its degree two. Thus the
canonical
map is not a closed immersion. A $k$-map that became a closed immersion
would remain one after base extension, so the same conclusion holds over $k$.

**Proof technique:** use the canonical Veronese factorization. Separability
identifies the generic geometric fiber as two distinct points; it is not
needed for the non-embedding argument.

1.1 (Veronese factorization and nonembedding.)
By [F1] and [F2], $L$ has degree two, $L^{\otimes(g-1)}\cong\omega_{C_{\bar k}}$,
and the canonical map factors through $v_{g-1}\circ\varphi$. Its generic
degree onto the rational normal image is two. If this composite were a closed
immersion, the coordinate-ring surjections would make $\varphi$ a closed
immersion into its Veronese image, which is isomorphic to the reduced scheme
$\mathbf P^1_{\bar k}$. The map $\varphi$ is finite and surjective by [F1];
[F4] then makes it an isomorphism, contradicting degree two. This proves the
nonembedding without assuming separability.
[F1, F2, F4]

1.2 (Generic geometric fiber.)
To describe the generic geometric fiber, work over $\Omega=\bar k$.
In characteristic different from two, a degree-two extension
$\Omega(C)/\Omega(t)$ is separable. In characteristic two, a degree-two
extension is either separable or purely inseparable. Suppose it were purely
inseparable. Choose a generator $\alpha$ with
$\alpha^2=h(t)\in\Omega(t)$, and write $h(t)=P(t)/Q(t)$ with
$P,Q\in\Omega[t]$, $Q\ne0$. Since $\Omega$ is perfect, choose
$P_0,Q_0\in\Omega[z]$ such that
$P(z^2)=P_0(z)^2$ and $Q(z^2)=Q_0(z)^2$. The embedding
$\Omega(t)\hookrightarrow\Omega(z)$, $t\mapsto z^2$, extends to
$\Omega(C)$ by sending $\alpha$ to $P_0(z)/Q_0(z)$. Indeed, this
element squares to $h(z^2)$, and $X^2-h(t)$ is irreducible because the
extension is purely inseparable of degree two. The resulting field embedding
has image of degree two over $\Omega(z^2)$; since
$[\Omega(z):\Omega(z^2)]=2$, its image is all of $\Omega(z)$.
Thus $C_{\bar k}$ is birational to $\mathbf P^1_{\bar k}$. Smooth proper
birational curves are isomorphic, contradicting $g\ge2$ by [F5]. The degree-two map is
therefore separable in characteristic two as well. Its generic geometric
fiber consists of two distinct points, and the Veronese factorization
identifies them under the canonical map. Special fibers may be ramified and
need not have two distinct points.
[F1, F2, F5]

2.1 (Numerical canonical data.)
The canonical space has dimension $g$, the canonical bundle has degree
$2g-2$, and it is globally generated. Since the canonical map is not a closed
immersion by step 1.1, base-point-freeness and these numerical data alone do
not imply the embedding conclusion.
[F2, F3, step 1.1]

2.2 (Genus two.)
For $g=2$, the Veronese map in the factorization is the identity of
$\mathbf P^1$. Thus after base extension the canonical map is the degree-two
map $\varphi$ itself, not an embedding.
[F2, step 1.1] ∎
