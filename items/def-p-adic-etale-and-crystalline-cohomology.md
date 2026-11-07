---
id: def-p-adic-etale-and-crystalline-cohomology
kind: definition
title: Étale, Hodge, and crystalline cohomology of a p-adic scheme
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-smooth-proper-model-over-a-p-adic-dvr
  - def-absolute-galois-group-of-a-local-field
  - def-local-p-adic-galois-representation
  - def-small-etale-site-of-a-scheme
  - lem-etale-coverings-form-a-grothendieck-site
  - lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives
  - def-etale-sheaf-of-finite-modules
  - thm-abelian-sheaves-on-a-site-have-enough-injectives
  - def-sheaf-cohomology-derived-global-sections
  - def-sheaf-relative-differentials
  - def-p-typical-witt-vectors-of-a-perfect-field
  - def-p-adic-integers-as-compatible-residue-classes
  - def-axiom-of-choice
justified_by: []
axiom_use: Assume AC for the étale-site and derived-sheaf-cohomology interfaces, through the cited site and injective-resolution suppliers; the inverse-limit notation itself uses no choice.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part I, Chapters 2 and 6
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: "Takeshi Tsuji, Semi-stable conjecture of Fontaine–Jannsen: a survey, Sections 2 and 4"
      url: https://www.numdam.org/item/AST_2002__279__323_0.pdf
    - title: The Stacks Project, Crystalline Cohomology, Sections 60.7–60.9
      url: https://stacks.math.columbia.edu/tag/07IF
verification:
  precheck: n/a
---

## Definition

Under the stated AC convention, take set-sized presentations of the displayed sites. On a site without a terminal object, global sections means the group of compatible sections on all its objects (the limit of the section diagram), a left exact functor. The terminal-independent enough-injectives clause of [[thm-abelian-sheaves-on-a-site-have-enough-injectives]] therefore supplies the injective resolutions used below; no terminal object is asserted for the crystalline site.

Let $K/\mathbb Q_p$ be finite, let $k$ be its residue field, let $\bar K$ be a separable closure, and let $X$ be a smooth proper $K$-scheme. Put $\bar X=X\times_{\operatorname{Spec}K}\operatorname{Spec}\bar K$. For $n\ge1$, $H^i_{\acute et}(\bar X,\mathbb Z/p^n\mathbb Z)$ is the $i$th right-derived global-sections group of the constant finite-coefficient sheaf on the small étale site of $\bar X$. Define
$$H^i_{\acute et}(\bar X,\mathbb Z_p):=\varprojlim_n H^i_{\acute et}(\bar X,\mathbb Z/p^n\mathbb Z),\qquad H^i_{\acute et}(\bar X,\mathbb Q_p):=H^i_{\acute et}(\bar X,\mathbb Z_p)\otimes_{\mathbb Z_p}\mathbb Q_p,$$
with transition maps induced by reduction of coefficients. Base change from $K$ gives these groups their natural $G_K$-action; finite dimensionality and continuity are addressed separately.

For $0\le b\le\dim X$, let $\Omega^b_{X/K}=\bigwedge^b\Omega^1_{X/K}$, where $\Omega^1_{X/K}$ is the sheaf of relative differentials. The Hodge cohomology group $H^a(X,\Omega^b_{X/K})$ is ordinary sheaf cohomology on the Zariski topology of $X$, and the algebraic de Rham cohomology is $H^i_{\mathrm{dR}}(X/K)=H^i(R\Gamma(X_{\mathrm{Zar}},\Omega^\bullet_{X/K}))$, the hypercohomology of the algebraic de Rham complex.

If $X$ has a smooth proper model over $\mathcal O_K$, write $X_0$ for its special fiber over $k$, let $W_p(k)$ be the ring of $p$-typical Witt vectors of $k$, and put $K_0=W_p(k)[1/p]$. A divided-power structure on an ideal $J$ of a ring $A$ is a family of maps $\delta_m:J\to A$ for $m\ge0$ satisfying $\delta_0(x)=1$, $\delta_1(x)=x$, $\delta_m(ax)=a^m\delta_m(x)$, $\delta_m(x+y)=\sum_{r+s=m}\delta_r(x)\delta_s(y)$, $\delta_r(x)\delta_s(x)=\binom{r+s}{r}\delta_{r+s}(x)$, and $\delta_r(\delta_s(x))=\frac{(rs)!}{r!(s!)^r}\delta_{rs}(x)$. The canonical divided powers on $pW_p(k)$ are $\delta_m(px)=p^mx^m/m!$. The small crystalline site of $X_0/W_p(k)$ has objects $(U\hookrightarrow T,\delta)$, where $U$ is open in $X_0$, $T$ is a $W_p(k)$-scheme, $U\hookrightarrow T$ is a closed immersion whose ideal is nilpotent, and $\delta$ is a divided-power structure on its ideal compatible with those on $pW_p(k)$. Morphisms preserve this data, and coverings are Zariski open coverings of $T$, with $U_i=U\times_TT_i$. Its structure sheaf sends $(U,T,\delta)$ to $\Gamma(T,\mathcal O_T)$. Define
$$H^i_{\mathrm{cris}}(X_0/W_p(k)):=R^i\Gamma((X_0/W_p(k))_{\mathrm{cris}},\mathcal O_{X_0/W_p(k)}),\qquad H^i_{\mathrm{cris}}(X_0/K_0):=H^i_{\mathrm{cris}}(X_0/W_p(k))[1/p].$$

## Definition references

[[def-smooth-proper-model-over-a-p-adic-dvr]]

[[def-absolute-galois-group-of-a-local-field]]

[[def-local-p-adic-galois-representation]]

[[def-small-etale-site-of-a-scheme]]

[[lem-etale-coverings-form-a-grothendieck-site]]

[[lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives]]

[[def-etale-sheaf-of-finite-modules]]

[[thm-abelian-sheaves-on-a-site-have-enough-injectives]]

[[def-sheaf-cohomology-derived-global-sections]]

[[def-sheaf-relative-differentials]]

[[def-p-typical-witt-vectors-of-a-perfect-field]]

[[def-p-adic-integers-as-compatible-residue-classes]]

[[def-axiom-of-choice]]

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part I, Chapters 2 and 6](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Takeshi Tsuji, *Semi-stable conjecture of Fontaine–Jannsen: a survey*, Sections 2 and 4](https://www.numdam.org/item/AST_2002__279__323_0.pdf)

[The Stacks Project, *Crystalline Cohomology*, Sections 60.7–60.9](https://stacks.math.columbia.edu/tag/07IF)
