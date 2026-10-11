---
id: def-parabolic-category-o-for-a-standard-parabolic
kind: definition
title: "Parabolic category O for a standard parabolic"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-standard-parabolic-and-levi-subalgebras-from-simple-roots,
       def-bgg-category-o, def-verma-module,
       def-weight-and-weight-space-of-a-lie-algebra-representation,
       def-integral-dominant-and-strictly-dominant-weights,
       thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights,
       prop-verma-and-finite-dimensional-modules-lie-in-category-o,
       def-cg-parabolic-quotient-and-two-sided-minima, def-axiom-of-choice,
       thm-weyls-complete-reducibility-theorem,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       thm-every-category-o-object-has-finite-length,
       prop-restricted-duality-is-an-exact-involution-on-category-o,
       thm-simple-objects-of-category-o-are-highest-weight-modules,
       thm-root-sl-two-triple, thm-category-o-is-abelian-and-extension-closed,
       thm-verma-module-has-a-unique-simple-quotient]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Hankyung Ko, Volodymyr Mazorchuk and Rafael Mrden, Some homological properties of category O VI, Documenta Mathematica 26 (2021) 1237-1269 (complete article)"
      url: "https://www.diva-portal.org/smash/get/diva2:1680785/FULLTEXT01.pdf"
      locator: "Section 4.1 (printed p. 1246): O^p defined as the full subcategory of objects on which U(p) acts locally finitely, the Serre subcategory described using dominance and integrality with respect to the Levi factor. The source uses dot-dominance wording; the exact unshifted nonnegative-integral Levi criterion used here is established by the local sl_2 argument."
    - title: "James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O, AMS Graduate Studies in Mathematics 94"
      url: null
      locator: "Section 9.2-9.3 (title-only locator): generalized Verma modules for a standard parabolic and the definition of the parabolic subcategory; conventions reproduced from the fetched treatments."
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
published category-$\mathcal O$ theory. Let
$\mathfrak p=\mathfrak p_J=\mathfrak l_J\oplus\mathfrak u_J$ be the standard
parabolic of
[[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]], with
reductive parabolic Levi $\mathfrak l_J$, nilradical $\mathfrak u_J$ and Weyl
group $W_J$; the ambient category is $\mathcal O$ of [[def-bgg-category-o]]
with standard objects the Verma modules [[def-verma-module]].

**(1) Dominance for the Levi.** A weight $\lambda$ is **$\mathfrak p$-dominant**
if $\langle\lambda,\alpha^\vee\rangle\in\mathbb Z_{\ge0}$ for all
$\alpha\in\Phi_J^+$ (this is dominance for the Levi root system; in particular
$\lambda$ is integral for $\Phi_J$; see
[[def-integral-dominant-and-strictly-dominant-weights]] for the ambient
notion). No integrality condition is imposed on the simple coroots outside
$J$, or on the central part $\mathfrak z_J$ of the Levi.

**(2) Generalized Verma modules.** For a $\mathfrak p$-dominant $\lambda$ let
$E(\lambda)$ be the finite-dimensional simple $\mathfrak p$-module obtained
from the finite-dimensional simple $\mathfrak l_J$-module of highest weight
$\lambda$
([[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]])
by letting $\mathfrak u_J$ act by zero. Define the **generalized Verma module**

$$M_{\mathfrak p}(\lambda):=U(\mathfrak g)\otimes_{U(\mathfrak p)}E(\lambda).$$

**(3) The parabolic category.** The **parabolic category** $\mathcal O^{\mathfrak p}$
is the full subcategory of $\mathcal O$ whose objects are the finitely
generated $\mathfrak h$-semisimple $\mathfrak g$-modules on which
$U(\mathfrak p)$ acts locally finitely, that is, on which every vector lies
in a finite-dimensional $\mathfrak p$-submodule; equivalently, every vector
lies in a finite-dimensional
$\mathfrak l_J$-submodule and is annihilated by a power of $\mathfrak u_J$
(local finiteness for the nilpotent $\mathfrak u_J$).

The following structural facts are part of the definition; the arguments are
given in the Remarks.

**(4) Generalized Vermas lie in $\mathcal O^{\mathfrak p}$.** For each
$\mathfrak p$-dominant $\lambda$, $M_{\mathfrak p}(\lambda)$ is an
object of $\mathcal O^{\mathfrak p}$ with highest weight $\lambda$, and the
natural surjection $M(\lambda)\twoheadrightarrow M_{\mathfrak p}(\lambda)$
exhibits $M_{\mathfrak p}(\lambda)$ as the largest quotient of the Verma
module $M(\lambda)$ that lies in $\mathcal O^{\mathfrak p}$.

**(5) Simples.** The simple objects of $\mathcal O^{\mathfrak p}$ are exactly
the simple highest-weight modules $L(\lambda)$ with $\lambda$
$\mathfrak p$-dominant
([[thm-simple-objects-of-category-o-are-highest-weight-modules]]).

**(6) Serre property.** $\mathcal O^{\mathfrak p}$ is closed under subobjects,
quotients and extensions in $\mathcal O$; in particular it is an abelian
subcategory of $\mathcal O$ stable under finite direct sums.

**(7) Costandard objects.** For $\mathfrak p$-dominant $\lambda$ put
$\nabla_{\mathfrak p}(\lambda):=D M_{\mathfrak p}(\lambda)$, the restricted
dual of [[prop-restricted-duality-is-an-exact-involution-on-category-o]].
These are the **costandard objects** of $\mathcal O^{\mathfrak p}$; each is
naturally a submodule of the ordinary dual Verma $D M(\lambda)$. They need not
be quotients of ordinary dual Vermas.

## Remarks

- **Finite Levi modules.** A finite-dimensional $\mathfrak l_J$-module with
  $\mathfrak h$-semisimple action splits as the direct sum of its
  center-weight spaces, and on each such space, which is a finite-dimensional
  module for the semisimple algebra $\mathfrak s_J$, Weyl's complete
  reducibility theorem
  ([[thm-weyls-complete-reducibility-theorem]]) applies. Hence such a module
  is a direct sum of finite-dimensional simple $\mathfrak l_J$-modules, and
  those are parametrized by weights integral and dominant for $\Phi_J$, with
  center $\mathfrak z_J$ acting through the weight
  ([[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]],
  [[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]] (3)).
- **Why $M_{\mathfrak p}(\lambda)\in\mathcal O^{\mathfrak p}$ (4).** Inflating
  $E(\lambda)$ to $\mathfrak p$ by $\mathfrak u_J\cdot E(\lambda)=0$ is a
  module structure because $\mathfrak u_J$ is an ideal of $\mathfrak p$ and
  $\mathfrak u_J$ acts on $E(\lambda)$ by zero. Poincar\'e--Birkhoff--Witt
  ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]) applied to
  the triangular decomposition
  $\mathfrak g=\mathfrak v_J\oplus\mathfrak p$ (with $\mathfrak v_J$ the sum
  of the negative outside root spaces) identifies
  $M_{\mathfrak p}(\lambda)$ with $U(\mathfrak v_J)\otimes E(\lambda)$ as a
  vector space, and more precisely each bounded negative $\zeta$-degree
  piece of $U(\mathfrak v_J)$ is finite dimensional (Remark (5) of
  [[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]]) and
  $\mathfrak l_J$-stable. Positive $\mathfrak u_J$ raises the $\zeta$-degree
  and hence lowers this degree after PBW reordering; since it annihilates the
  degree-zero Levi part, each such finite piece is $\mathfrak p$-stable. This
  proves $\mathfrak p$-local finiteness of $M_{\mathfrak p}(\lambda)$
  directly, with finite-dimensional $\mathfrak p$-stable pieces. The
  natural surjection $M(\lambda)\twoheadrightarrow M_{\mathfrak p}(\lambda)$
  (induced by $v_\lambda\mapsto 1\otimes e_\lambda$) shows that
  $M_{\mathfrak p}(\lambda)$ is a quotient of the Verma module, hence an
  object of $\mathcal O$
  ([[prop-verma-and-finite-dimensional-modules-lie-in-category-o]]); it has
  the same highest weight $\lambda$ and a unique simple head $L(\lambda)$,
  since every simple quotient is also a simple quotient of $M(\lambda)$
  ([[thm-verma-module-has-a-unique-simple-quotient]]), and all its composition factors lie below
  $\lambda$ because it is a quotient of $M(\lambda)$
  ([[thm-every-category-o-object-has-finite-length]],
  [[thm-simple-objects-of-category-o-are-highest-weight-modules]]).
- **Largest quotient (4).** For a parabolic quotient $Q$ of $M(\lambda)$,
  let $\overline v$ be the image of the highest vector. Every positive
  root vector kills it. Its finite Levi span is, by complete reducibility,
  a cyclic highest-weight copy of $E(\lambda)$ if $\overline v\ne0$,
  and zero otherwise. The radical kills this entire span because it kills
  $\overline v$ and $[\mathfrak u_J,\mathfrak l_J]\subseteq\mathfrak u_J$.
  Tensor induction therefore factors the quotient map through
  $M_{\mathfrak p}(\lambda)$.
- **Local finiteness and Serre closure (6).** Inside $\mathcal O$,
  $\mathfrak p$-local finiteness is equivalent to local nilpotence of the
  negative simple root vectors $f_j$, $j\in J$. Necessity follows because
  $f_j$ lowers weights and a finite-dimensional weight module has finite
  weight support. Conversely, the cyclic Levi module of a weight vector
  is finitely generated, Cartan-semisimple and locally
  $\mathfrak n_J^+$-finite, hence is an object of the semisimple Levi's
  category $\mathcal O$ and has finite length. Local nilpotence of $f_j$
  descends to its simple highest-weight factors. If $v$ is the top of
  such a factor and $k$ is least with $f_j^kv=0$, the relation
  $e_jf_j^kv=k(\lambda(h_j)-k+1)f_j^{k-1}v$ forces
  $\lambda(h_j)=k-1\in\mathbb Z_{\ge0}$
  ([[thm-root-sl-two-triple]]). The finite-dimensional highest-weight
  classification makes each factor finite dimensional, so the cyclic
  Levi module is finite dimensional. A vector with several weights is
  handled by their finite sum. Moreover $U(\mathfrak u_J)m$ is finite
  dimensional because $\mathfrak u_J\subseteq\mathfrak n^+$. PBW gives
  $U(\mathfrak p)m=U(\mathfrak l_J)U(\mathfrak u_J)m$; the finitely many
  basis vectors of that radical span each have a finite Levi span. This
  proves local finiteness. For extensions, kill a vector's image by one
  power of $f_j$, then its resulting vector in the submodule by another.
  Local nilpotence also passes to subobjects and quotients, so this
  criterion proves the Serre property in the ambient abelian category.
- **Simples (5).** A simple $\mathfrak g$-module $L(\lambda)$ lies in
  $\mathcal O^{\mathfrak p}$ if and only if $\lambda$ is $\mathfrak p$-dominant: necessity holds because the highest weight vector generates a
  finite-dimensional $\mathfrak p$-module, whose finite-dimensional
  $\mathfrak s_J$-part has $\lambda$ as a highest weight of a finite Levi
  simple, forcing $\langle\lambda,\alpha^\vee\rangle\in\mathbb Z_{\ge0}$ for
  $\alpha\in\Phi_J^+$; sufficiency holds because $L(\lambda)$ is a quotient
  of $M_{\mathfrak p}(\lambda)\in\mathcal O^{\mathfrak p}$ and
  $\mathcal O^{\mathfrak p}$ is closed under quotients by the previous
  paragraph.
- **Duality and costandards (7).** Restricted duality
  ([[prop-restricted-duality-is-an-exact-involution-on-category-o]]) is exact
  and contravariant on $\mathcal O$. A locally finite semisimple Levi
  representation with finite $\mathfrak h$-weight spaces is an algebraic
  direct sum of finite-dimensional Levi simples: taking an increasing
  sequence of finite-dimensional Levi submodules exhausting the space,
  complete reducibility splits each inclusion, the successive spans exhaust
  the space, and every weight meets only finitely many summands (the weight
  space is finite dimensional); the restricted dual is then the direct sum
  of the finite duals, again a finite-dimensional-module direct sum. Hence
  $D$ preserves $\mathcal O^{\mathfrak p}$; the natural map
  $D M_{\mathfrak p}(\lambda)\to D M(\lambda)$ is injective (dual of the
  Verma quotient), so $\nabla_{\mathfrak p}(\lambda)$ is naturally a
  submodule of the ordinary dual Verma. Its simple socle is $L(\lambda)$ by
  duality from the simple head of $M_{\mathfrak p}(\lambda)$. It is not
  generally a quotient of $D M(\lambda)$: dualizing, that would say
  $M(\lambda)$ embeds in $M_{\mathfrak p}(\lambda)$, which fails as soon as
  the Verma surjection has a nonzero kernel (for instance $\mathfrak g=\mathfrak{sl}_2$, $J=\{s\}$
  and $\lambda=0$, when $M_{\mathfrak p}(0)=L(0)$ is one dimensional).
- **Choice.** The Axiom of Choice is inherited from the published
  category-$\mathcal O$ theory quoted above (restricted duality, finite
  length, enough structures); no new choice principle is introduced.
