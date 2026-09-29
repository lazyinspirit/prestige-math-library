---
id: lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space
kind: lemma
title: Finite twisted locally free resolutions on projective space
status: draft
origin: pipeline
deps:
  - lem-graded-section-module-finite-projective
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - def-associated-sheaf-graded-module-proj
  - thm-auslander-buchsbaum-serre-regularity-criterion
  - def-axiom-of-choice
  - lem-extend-sections-from-nonvanishing-open
  - thm-projective-space-as-proj
  - def-twisting-sheaf-proj
  - thm-twisting-sheaf-invertible-standard-graded
  - lem-proj-associated-sheaf-basic-sections
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - cor-finite-variable-polynomial-ring-noetherian
  - lem-finite-modules-over-noetherian-rings-are-noetherian
  - thm-localisation-of-modules-is-exact
  - thm-affine-quasi-coherent-equivalence
  - thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective
  - def-projective-dimension-of-an-object
  - def-global-dimension-of-an-abelian-category
  - def-graded-ring-and-graded-module
  - def-coherent-module-scheme
  - def-quasi-coherent-module-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - thm-exactness-of-sheaves-stalkwise
  - lem-associated-sheaf-stalk-localization
  - lem-standard-opens-proj-affine
  - def-sheaf-tensor-product
  - def-exact-sequence-sheaves
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
      locator: "§§30.2, 30.8, 30.14 (finiteness of coherent cohomology, Serre's theorem on coherent sheaves on projective space, and the twisted resolution)"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry Classes 53-54"
      url: https://math.stanford.edu/~vakil/0506-216/216Cjun2807.pdf
      locator: "Class 53 §§1-5 and Class 54 §7, 11; the omitted connecting-morphism proof is a local obligation"
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and $n\ge0$, let
$S=k[x_0,\dots,x_n]$ be graded by total degree with $\deg x_i=1$, let
$\mathbb P^n_k=\operatorname{Proj}S$ with twisting sheaves
$\mathcal O(d)=\widetilde{S(d)}$, and let $F$ be a coherent
$\mathcal O_{\mathbb P^n_k}$-module. Then there is a finitely generated graded
$S$-module $M$ with $\widetilde M\cong F$ and an exact sequence of graded
$S$-modules with degree-preserving maps
$$0\longrightarrow F_{n+1}\longrightarrow F_n\longrightarrow\cdots\longrightarrow F_0\longrightarrow M\longrightarrow 0$$
in which every $F_i$ is a finite direct sum of shifted free modules $S(d)$
with $d\in\mathbb Z$, and whose sheafification
$$0\longrightarrow\widetilde F_{n+1}\longrightarrow\cdots\longrightarrow\widetilde F_0\longrightarrow F\longrightarrow 0$$
is an exact sequence of $\mathcal O_{\mathbb P^n_k}$-modules in which every
$\widetilde F_i$ is a finite direct sum $\bigoplus_j\mathcal O(d_{ij})$ of
twisting sheaves. The resolution has length at most $n+1$: the displayed free
terms $F_0,\dots,F_{n+1}$ are finite direct sums of shifted free modules, any
of them may be zero, a shorter resolution is allowed when it terminates
earlier, and the truncation degree of $M$ is chosen so that $M$ is finitely
generated and $\widetilde M\cong F$.

## Facts & Assumptions

**Given:** the field $k$, the integer $n\ge0$, the graded polynomial ring $S=k[x_0,\dots,x_n]$ with $\deg x_i=1$, the projective space $\mathbb P^n_k=\operatorname{Proj}S$, a coherent sheaf $F$ on it, the Axiom of Choice, and the finite-generation computation [[lem-graded-section-module-finite-projective]].

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] There is a canonical isomorphism $\operatorname{Proj}S\cong\mathbb P^n_k$ and $\mathcal O(d)=\widetilde{S(d)}$ on $\operatorname{Proj}S$; each $\mathcal O(d)$ is invertible and the multiplication maps $\mathcal O(m)\otimes_{\mathcal O}\mathcal O(n)\to\mathcal O(m+n)$ are isomorphisms, with $\mathcal O(0)=\mathcal O$. ([[thm-projective-space-as-proj]], [[def-twisting-sheaf-proj]], [[thm-twisting-sheaf-invertible-standard-graded]])

[F2] A coherent $\mathcal O_{\mathbb P^n}$-module is quasi-coherent, and on a locally Noetherian scheme the kernel, image and cokernel of a morphism of coherent modules are coherent and finite direct sums of coherent modules are coherent. ([[def-coherent-module-scheme]], [[def-quasi-coherent-module-scheme]], [[thm-coherent-sheaves-abelian-noetherian-scheme]])

[F3] $\mathbb P^n_k$ is locally Noetherian and Noetherian: its standard charts $D_+(x_i)=\operatorname{Spec}S_{(x_i)}$ are affine with $S_{(x_i)}\cong k[x_j/x_i:j\ne i]$, a polynomial ring in $n$ variables over $k$ and hence Noetherian, and finitely many charts cover $\mathbb P^n_k$. ([[cor-finite-variable-polynomial-ring-noetherian]], [[def-locally-noetherian-and-noetherian-scheme]], [[lem-standard-opens-proj-affine]])

[F4] Let $X$ be a quasi-compact quasi-separated scheme, $G$ a quasi-coherent sheaf, $L$ an invertible sheaf and $s\in\Gamma(X,L^d)$ with $d>0$. For $\Gamma_*(X,G,L)=\bigoplus_{r\ge0}\Gamma(X,G\otimes L^{dr})$ the canonical map $$\bigl(\Gamma_*(X,G,L)_{(s)}\bigr)_0\longrightarrow\Gamma(X_s,G),\qquad u/s^r\longmapsto u\otimes s^{-r}|_{X_s},$$ is an isomorphism of abelian groups; in particular every section of $G$ over $X_s$ is of the form $u\otimes s^{-r}$ with $u\in\Gamma(X,G\otimes L^{dr})$. ([[lem-extend-sections-from-nonvanishing-open]])

[F5] For a graded $S$-module $N$ and homogeneous $f\in S_+$ of positive degree one has $\Gamma(D_+(f),\widetilde N)=N_{(f)}$ naturally in $N$ and compatibly with restrictions under further localisation; $\widetilde N$ is quasi-coherent on $\operatorname{Proj}S$, and the standard opens form a basis of the topology. ([[def-associated-sheaf-graded-module-proj]], [[lem-proj-associated-sheaf-basic-sections]])

[F6] For a coherent sheaf $F$ on $\mathbb P^n_k$ the truncated graded module $\bigoplus_{m\ge m_0}\Gamma(\mathbb P^n_k,F(m))$ is finitely generated over $S$ for all sufficiently large $m_0$. ([[lem-graded-section-module-finite-projective]])

[F7] $S$ is a regular Noetherian ring, $\operatorname{gldim}S=\dim S=n+1$, and projective dimension is the supremum of the prime-local projective dimensions of a finite module, so every finitely generated $S$-module has projective dimension at most $n+1$. ([[thm-localisation-and-polynomial-extension-of-regular-rings]], [[def-global-dimension-of-an-abelian-category]], [[def-projective-dimension-of-an-object]])

[F8] For an abelian category with enough projectives, a fixed projective resolution $P_\bullet\to M$ and $n\ge1$ one has $\operatorname{pd}(M)\le n$ if and only if the $n$th syzygy $\Omega^n_P(M)=\ker(P_{n-1}\to P_{n-2})$ is projective. ([[thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective]], [[def-projective-dimension-of-an-object]])

[F9] A finitely generated graded $S$-module has a finite homogeneous generating set and is bounded below in degree, because $S$ is nonnegatively graded. The kernel and cokernel of a degree-preserving map of graded $S$-modules are graded. ([[def-graded-ring-and-graded-module]]) The polynomial ring $S$ is Noetherian ([[cor-finite-variable-polynomial-ring-noetherian]]), and a submodule of a finitely generated module over a Noetherian ring is finitely generated ([[lem-finite-modules-over-noetherian-rings-are-noetherian]]).

[F10] Localisation of modules is exact ([[thm-localisation-of-modules-is-exact]]), and on an affine scheme the associated-sheaf equivalence is exact and a quasi-coherent sheaf is the associated sheaf of its global sections ([[thm-affine-quasi-coherent-equivalence]]).

[F11] A sequence of sheaves of abelian groups is exact if and only if all of its stalk sequences are exact ([[thm-exactness-of-sheaves-stalkwise]]), and the stalk of the associated sheaf $\widetilde N$ of an $A$-module $N$ at a prime $\mathfrak p$ is $N_{\mathfrak p}$ ([[lem-associated-sheaf-stalk-localization]]).



**Proof technique:** direct: identify $F$ with the associated sheaf of its graded module of twisted global sections through the section-extension lemma, truncate to a finitely generated graded module, resolve that module by finite graded free modules using the regular global-dimension bound, minimality of graded Nakayama, and the syzygy criterion, and sheafify the exact resolution.

## Proof

1.1 The section module. For $i=0,\dots,n$ the section $x_i\in\Gamma(\mathbb P^n_k,\mathcal O(1))=S_1$ is homogeneous of degree one and its nonvanishing locus is the standard open $D_+(x_i)$; these finitely many affine charts cover $\mathbb P^n_k$. Put $$M_F=\bigoplus_{d\ge0}\Gamma(\mathbb P^n_k,F(d)),\qquad F(d)=F\otimes_{\mathcal O_{\mathbb P^n}}\mathcal O(d),$$ a graded $S$-module whose degree-$d$ part is $\Gamma(\mathbb P^n_k,F(d))$, with $S$-action induced by the multiplication maps $\mathcal O(e)\otimes\mathcal O(d)\to\mathcal O(e+d)$ of [F1]. The sheaf $F$ is quasi-coherent by [F2] and $\mathbb P^n_k$ is quasi-compact and quasi-separated by [F3], as is each affine chart. [F1, F2, F3, given]

1.2 Chartwise comparison. Apply the section-extension lemma [F4] on the quasi-compact quasi-separated scheme $\mathbb P^n_k$ to the quasi-coherent sheaf $F$, the invertible sheaf $L=\mathcal O(1)$ and the section $s=x_i\in\Gamma(\mathbb P^n_k,\mathcal O(1))$, so that $d=1$ and $X_s=D_+(x_i)$. Since $\Gamma_*(\mathbb P^n_k,F,\mathcal O(1))=\bigoplus_{r\ge0}\Gamma(\mathbb P^n_k,F\otimes\mathcal O(1)^{r})=M_F$ by [F1], the lemma gives a canonical isomorphism of abelian groups $$\theta_i:M_F[x_i^{-1}]_0=(M_F)_{(x_i)}\longrightarrow\Gamma(D_+(x_i),F),\qquad a/x_i^r\longmapsto a\otimes x_i^{-r}|_{D_+(x_i)}.$$ [F1, F2, F3, F4, given]

1.3 The same group on the sheaf side. By [F5] the global sections of the associated sheaf on the standard open are $\Gamma(D_+(x_i),\widetilde{M_F})=(M_F)_{(x_i)}$, and restriction from $D_+(x_i)$ to $D_+(x_ix_j)$ is the localisation $(M_F)_{(x_i)}\to(M_F)_{(x_ix_j)}$. [F5]

1.4 Finite generation after truncation. By [F6] there is $m_0\ge0$ such that $$M:=\bigoplus_{d\ge m_0}\Gamma(\mathbb P^n_k,F(d))$$ is a finitely generated graded $S$-module; it is the degree-$\ge m_0$ truncation of $M_F$. [F6]

1.5 Graded free covers and finite generation of syzygies. Since $S$ is Noetherian and $M$ is finitely generated and graded, $M$ has a finite homogeneous generating set; the degree-preserving surjection $F_0=\bigoplus_jS(-d_j)\to M$ from the finite graded free module on those generators has a kernel $K_1=\ker(F_0\to M)$ which is a graded submodule of the finitely generated module $F_0$, hence is again finitely generated. Repeating this construction with $K_0:=M$ and $K_{i+1}:=\ker(F_i\to K_i)$, each $F_i$ a finite graded free module and each map degree-preserving, produces a graded free resolution $$\cdots\longrightarrow F_1\longrightarrow F_0\longrightarrow M\longrightarrow 0.$$ Every $F_i$ is a finite direct sum of shifted free modules $S(d)$, every kernel is graded and finitely generated, and all maps have degree zero. [F9, algebra]

2.1 Gluing the chart isomorphisms. For every $i$ the map $\theta_i$ of step 1.2 is the canonical identification of $\Gamma(D_+(x_i),F)$ with the degree-zero localisation of $M_F$, and by step 1.3 the same description holds for $\widetilde{M_F}$. On an overlap $D_+(x_ix_j)$ both identifications restrict to the common localisation $(M_F)_{(x_i x_j)}$: the restriction of $\theta_i$ is induced by inverting $x_j$, and this is exactly the restriction of $\widetilde{M_F}$ by [F5]. The charts $D_+(x_i)$ cover $\mathbb P^n_k$ by [F3] and [F5], so the chart isomorphisms agree on overlaps and glue to an isomorphism of $\mathcal O_{\mathbb P^n}$-modules $$\theta:\widetilde{M_F}\longrightarrow F,$$ quasi-coherent on both sides. The overlap condition holds by the displayed identification of both restrictions with the same localisation map, whose two composites to $(M_F)_{(x_ix_jx_l)}$ agree on triple overlaps by the universal property of localisation. [F3, F5, step 1.2, step 1.3]

2.2 Termination at $n+1$ by graded Nakayama. By [F7] the regular ring $S$ has global dimension $n+1$, so the finitely generated module $M$ has projective dimension at most $n+1$. The syzygy criterion [F8] applied to the resolution of step 1.5 makes $K_{n+1}$ projective; it is finitely generated and graded. We prove that any finitely generated graded projective $S$-module $K$ is graded free. Put $\mathfrak m=S_+=(x_0,\dots,x_n)$. First, if a finitely generated graded $S$-module $Q$ satisfies $Q=\mathfrak mQ$, then $Q=0$: by [F9] its nonzero homogeneous degrees are bounded below, and a nonzero homogeneous element of least degree cannot be a sum $\sum_jx_jq_j$ with each nonzero $q_j$ of one smaller degree. This is graded Nakayama and does not require $\mathfrak m\subseteq J(S)$. Choose homogeneous lifts of a homogeneous $k$-basis of the finite-dimensional graded vector space $K/\mathfrak mK$, and let $u:G\to K$ be the resulting degree-preserving map from a finite sum of shifted copies of $S$. Its cokernel $Q$ is finite graded and $Q/\mathfrak mQ=0$, so graded Nakayama makes $u$ surjective. Projectivity of $K$ gives an ungraded section $s$ of $u$; taking, for each homogeneous $v\in K$, the component of $s(v)$ in degree $\deg v$ gives a degree-zero section, because $u$ preserves degrees and $u(s(v))=v$. Thus $G\cong K\oplus L$ as graded modules, where $L=\ker u$ is finite graded by [F9]. Since $u$ is an isomorphism modulo $\mathfrak m$ and the splitting is graded, $L/\mathfrak mL=0$; graded Nakayama gives $L=0$. Hence $u$ is a graded isomorphism and $K$ is a finite direct sum of shifted free modules. Apply this to $K_{n+1}$, including $K_{n+1}=0$, to obtain the exact finite graded free sequence $$0\longrightarrow F_{n+1}\longrightarrow F_n\longrightarrow\cdots\longrightarrow F_0\longrightarrow M\longrightarrow0,$$ with $F_{n+1}=K_{n+1}$. If an earlier syzygy is free, the sequence may terminate earlier; its length is at most $n+1$. [F7, F8, F9, step 1.5]

3.1 The sheaf $\widetilde{M_F}$ is quasi-coherent by [F5], so $\theta$ is a morphism of quasi-coherent modules and its construction used only the canonical localisation maps, not a choice of trivialisations: the identifications $\theta_i$ are the maps supplied by [F4]. [F2, F5, step 2.1]

3.2 Truncation does not change the associated sheaf. The inclusion $M\hookrightarrow M_F$ of graded $S$-modules induces for every $i$ a map of localisations $(M)_{(x_i)}\to(M_F)_{(x_i)}$, which is injective because localisation is exact [F10]. It is surjective: a fraction $a/x_i^r$ with $a\in\Gamma(\mathbb P^n_k,F(r))$ homogeneous of degree $r$ satisfies $x_i^N a\in\Gamma(\mathbb P^n_k,F(r+N))\subseteq M$ for every $N\ge m_0$, and $a/x_i^r=(x_i^Na)/x_i^{r+N}$ in the degree-zero localisation. Hence $(M)_{(x_i)}\cong(M_F)_{(x_i)}$ for every $i$, the two associated sheaves agree on each standard chart, and since the charts cover $\mathbb P^n_k$ the canonical morphism $\widetilde M\to\widetilde{M_F}$ is an isomorphism. Composing with $\theta$ of step 2.1 gives $$\widetilde M\cong F.$$ [F5, F10, step 2.1, step 1.4]

4.1 Sheafification is exact. The sequence of step 2.2 is an exact sequence of graded $S$-modules. Localising at $\{x_i^r\}$ is exact [F10], so for each $i$ the sequence $$0\longrightarrow(F_{n+1})_{(x_i)}\longrightarrow(F_n)_{(x_i)}\longrightarrow\cdots\longrightarrow(F_0)_{(x_i)}\longrightarrow(M)_{(x_i)}\longrightarrow0$$ is exact; on the affine chart $D_+(x_i)=\operatorname{Spec}S_{(x_i)}$ the associated-sheaf functor is exact, being a quasi-inverse equivalence [F10], and it intertwines restriction to the chart with the identifications of [F5]. Hence the sheafified complex restricted to each chart is exact, and its stalks are the localisations of the exact localised sequences. Since the standard charts cover $\mathbb P^n_k$, exactness of the sheafified complex is checked stalkwise [F11], so $$0\longrightarrow\widetilde F_{n+1}\longrightarrow\widetilde F_n\longrightarrow\cdots\longrightarrow\widetilde F_0\longrightarrow\widetilde M\longrightarrow0$$ is an exact sequence of $\mathcal O_{\mathbb P^n_k}$-modules. By [F1] each $\widetilde F_i$ is a finite direct sum $\bigoplus_j\mathcal O(d_{ij})$, and $\widetilde M\cong F$ by step 3.2. [F1, F5, F10, F11, step 3.2, step 2.2]

5.1 Conclusion. Step 3.2 produces a finitely generated graded $S$-module $M$ with $\widetilde M\cong F$, step 2.2 a finite exact graded free resolution of $M$ of length at most $n+1$, and step 4.1 its exact sheafification by finite direct sums of twisting sheaves. For the zero sheaf take $M=0$ and the zero resolution; for $n=0$ the regular ring $S=k[x_0]$ has global dimension one, and the same graded argument applies. The Axiom of Choice [A1] is inherited through the section-extension lemma [F4], finite generation [F6], the regular-ring global-dimension theorem [F7], and the syzygy criterion [F8]. The graded Nakayama argument in step 2.2 uses a least homogeneous degree and does not invoke ordinary Nakayama at the irrelevant ideal. [A1, F4, F6, F7, F8, F9, step 2.1, step 2.2, step 3.2, step 4.1] ∎
