---
id: def-mean-curvature-vector
kind: definition
title: Mean curvature vector
status: published
origin: pipeline
deps: ["lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor", "def-contraction-of-a-mixed-tensor", "lem-contraction-is-independent-of-the-basis-formula", "thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms", "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases", "prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions", "prop-orthogonal-complements-of-subbundles-are-smooth-subbundles", "thm-pullback-connection-is-well-defined-and-functorial", "cor-every-immersion-is-locally-an-embedding"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Danny Calegari, Minimal Surfaces
      url: https://web.archive.org/web/20190618171523if_/http://math.uchicago.edu/~dannyc/courses/minimal_surfaces_2014/minimal_surfaces_notes.pdf
      locator: Chapter 3, Section 2.2, definition preceding Proposition 2.1 and normalization Warning 2.4, printed pages 12–13
    - title: Chuu-Lian Terng, Lecture Notes on Curves and Surfaces in R^3 and Riemannian Geometry
      url: https://www.math.uci.edu/~cterng/LectureNotes1353.pdf
      locator: Section 2.1, unnormalized trace convention and first-variation formula (2.1.22), printed pages 30–31
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$. Let
$f:M^m\rightarrow(\overline M,\overline g)$ be a smooth immersion of positive
dimension $m\geq1$, and give $M$ the induced metric $g=f^*\overline g$. The
orthogonal complements of $df(TM)$ in $f^*T\overline M$ form the smooth
**normal bundle** $\nu_fM$. Every immersion is locally an embedding, and on
such a neighbourhood the embedded second fundamental form from
[[lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor]]
pulls back to a section of $S^2T^*M\otimes\nu_fM$. Equivalently it is the
normal projection of $(f^*\overline\nabla)_Xdf(Y)$. This intrinsic pullback-
connection formula shows that the local tensors agree on overlaps; denote the
result by $\mathrm{II}_f$.

The immersion's **mean curvature vector field** (with the averaged convention)
is

$$\mathbf H_f:=\frac1m\operatorname{tr}_g\mathrm{II}_f\in\Gamma(\nu_fM).$$

Thus, at $p\in M$, for any orthonormal basis
$(e_1,\ldots,e_m)$ of $T_pM$,

$$\mathbf H_f(p)=\frac1m\sum_{i=1}^m(\mathrm{II}_f)_p(e_i,e_i).$$

This value is independent of the orthonormal basis. Indeed, if
$f_a=\sum_iO_{ai}e_i$ is another one, then $O$ is orthogonal, and bilinearity
of the normal-bundle-valued tensor $\mathrm{II}_f$ gives

$$\sum_a\mathrm{II}_f(f_a,f_a)=\sum_{i,j}\left(\sum_aO_{ai}O_{aj}\right)\mathrm{II}_f(e_i,e_j)=\sum_i\mathrm{II}_f(e_i,e_i).$$

Equivalently, this is contraction of the two covariant tangent slots after
raising one of them with the inverse metric. In a smooth local tangent frame
$(X_i)$ it has the formula

$$\mathbf H_f=\frac1m\sum_{i,j}g^{ij}\mathrm{II}_f(X_i,X_j).$$

The inverse-metric coefficients $g^{ij}$ and the coefficients of
$\mathrm{II}_f$ are smooth, so this formula also proves that $\mathbf H_f$ is a
smooth normal field. Componentwise, its invariance is the usual
basis-independence of contraction.

No normal frame, normal orientation, or coorientation enters the definition,
so $\mathbf H_f$ is independent of all such choices. For an embedded
submanifold and its inclusion, this is exactly the preceding embedded
construction. Calegari's Warning 2.4
calls the displayed averaged value the more usual convention; Calegari and
Terng use the unnormalized trace instead. Consequently, their mean-curvature
vector is $m\mathbf H_f$ in the present notation, which accounts for the factor
$m$ in the next first-variation formula.

The assumption $\mathrm{AC}_\omega$ is inherited exactly through the smooth
normal projection used to construct $\mathrm{II}_f$; taking this finite trace
adds no choice. The definition is the unique empty normal field when $M$ is
empty of fixed positive dimension. In dimension one it is
$\mathbf H_f(p)=(\mathrm{II}_f)_p(e,e)$ for either unit tangent vector $e$; in
codimension zero it is zero. It applies unchanged at boundary points.
Dimension zero is excluded because $1/m$ is undefined, and degenerate metrics
are outside the Riemannian hypothesis.
