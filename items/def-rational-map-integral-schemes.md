---
id: def-rational-map-integral-schemes
kind: definition
title: "Rational maps of integral finite-type schemes"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-dense-top
  - def-integral-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-morphism-of-schemes
  - def-open-immersion-schemes
  - def-separated-morphism-schemes
  - lem-integral-finite-type-scheme-function-field
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Definition

Let $k$ be a field and let $X$ be an integral $k$-scheme of finite type and $Y$ a $k$-scheme of finite type
([[def-integral-scheme]], [[def-locally-finite-type-and-finite-type-morphism]])
with $Y$ **separated** over $k$ ([[def-separated-morphism-schemes]]).

A **rational map** $\varphi:X\dashrightarrow Y$ is an equivalence class of
pairs $(U,\varphi_U)$, where $U\subseteq X$ is a nonempty open subscheme
([[def-open-immersion-schemes]]) and $\varphi_U:U\to Y$ is a $k$-morphism
([[def-morphism-of-schemes]]). Two pairs $(U,\varphi_U)$ and $(V,\psi_V)$ are
**equivalent** when the two morphisms agree on a nonempty open subscheme of
$U\cap V$, that is, when there is a nonempty open $W\subseteq U\cap V$ with
$\varphi_U|_W=\psi_V|_W$.

*The relation is an equivalence relation.* Reflexivity and symmetry are
immediate. For transitivity let $(U,\varphi_U)\sim(V,\psi_V)$ through
$W\subseteq U\cap V$ and $(V,\psi_V)\sim(T,\chi_T)$ through
$Z\subseteq V\cap T$. Since $X$ is integral, hence irreducible, any two
nonempty open subschemes meet, so $W\cap Z$ is a nonempty open subscheme of
$U\cap T$, and on $W\cap Z$ the morphisms $\varphi_U$ and $\chi_T$ agree with
$\psi_V$, hence with one another. Thus $(U,\varphi_U)\sim(T,\chi_T)$.
No integrality or reducedness of the target is needed.

A rational map is **dominant** when some representative $\varphi_U$ has dense
image. This is independent of the representative: if $(U,\varphi_U)$ and
$(V,\psi_V)$ are equivalent through a nonempty open $W\subseteq U\cap V$, then
$W$ is dense in the irreducible scheme $U$, so continuity gives
$\varphi_U(U)\subseteq\overline{\varphi_U(W)}=\overline{\psi_V(W)}\subseteq
\overline{\psi_V(V)}$; hence $\varphi_U$ dominant implies $\psi_V$ dominant,
and the converse is symmetric. A point of $X$ at which no representative of
$\varphi$ is defined is a **point of indeterminacy** of $\varphi$.

When $X$ is integral and of finite type over $k$, its function field
$k(X)=\mathcal O_{X,\eta_X}$ is the stalk at the generic point, and the
function field of every nonempty affine open is the fraction field of its
coordinate ring ([[lem-integral-finite-type-scheme-function-field]]); this is
the description used whenever a rational map of curves is converted into a
map of function fields below.
