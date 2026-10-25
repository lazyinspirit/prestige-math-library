---
id: lem-rational-map-smooth-curve-to-proper-scheme-extends
kind: lemma
title: "Rational maps from a smooth curve to a proper scheme are morphisms"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-morphisms-equal-on-dense-open-reduced-source
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-dimension-noetherian-topological-space
  - def-discrete-valuation-ring
  - def-finite-type-and-module-finite-algebras
  - def-field-of-fractions
  - def-integral-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-morphism-of-schemes
  - def-principal-localisation
  - def-proper-morphism
  - def-rational-map-integral-schemes
  - def-separated-morphism-schemes
  - def-smooth-morphism-to-field-classical
  - def-valuation-ring
  - def-valuative-diagram-separatedness
  - lem-affine-local-dimension-residue-transcendence
  - lem-curve-closed-subsets-finite
  - lem-finite-type-jacobson-residue-extension
  - lem-field-is-noetherian
  - lem-finite-type-local-on-source-and-target
  - lem-integral-finite-type-scheme-function-field
  - lem-morphism-schemes-local-on-source-target
  - lem-spectrum-localization-open-immersion
  - thm-hilbert-basis-theorem
  - thm-morphisms-into-affine-scheme-global-sections
  - thm-noetherian-ring-quotients-and-localisations
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-valuative-criterion-properness
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "The Stacks Project, Morphisms of Schemes, \u00a7\u00a729, 33-35, 43"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice, inherited through the curve closed-subset
finiteness, affine local-dimension and smoothness criteria, the DVR criterion
for local rings of $X$, the valuative criterion for $Y$, and the
separated-target agreement criterion used below. Let $X$ be a
smooth curve over a field $k$ and let $Y$ be a proper $k$-scheme. Then every
rational map $\varphi:X\dashrightarrow Y$ is represented by a $k$-morphism
$X\to Y$: for every representative $(U,\varphi_U)$ the morphism $\varphi_U$
extends over the finite set of closed points of $X\setminus U$, the local rings
of $X$ at those points being discrete valuation rings and properness of $Y$
supplying the valuative lift. Consequently the rational maps $X\dashrightarrow
Y$ are exactly the $k$-morphisms $X\to Y$, and since $Y$ is separated over $k$
the representing morphism is unique.

## Facts & Assumptions
**Given:** A field $k$, a smooth curve $X$ over $k$, a proper $k$-scheme $Y$, and a rational map $\varphi:X\dashrightarrow Y$ together with a representative $(U,\varphi_U)$ on a nonempty open $U\subseteq X$.

[F1] A smooth curve $X$ over $k$ is a geometrically integral, separated $k$-scheme of finite type whose structure morphism is smooth, and its underlying space has chain dimension one; in particular $X$ is reduced and irreducible, has a unique generic point $\eta$, and every nonempty open subscheme of $X$ contains $\eta$. ([[def-algebraic-curve-over-field]], [[def-integral-scheme]])

[F2] For an integral finite-type source and a separated finite-type target (not necessarily integral), a rational map $X\dashrightarrow Y$ is an equivalence class of pairs $(U,\varphi_U)$ with $U\subseteq X$ nonempty open and $\varphi_U:U\to Y$ a $k$-morphism, where equivalence means agreement on a nonempty open subscheme of the intersection; a point where no representative is defined is a point of indeterminacy. ([[def-rational-map-integral-schemes]])

[F3] Under Choice, every proper closed subset $Z\subsetneq X$ of a curve is a finite set of closed points, and every point of $X$ other than the generic point is closed. ([[lem-curve-closed-subsets-finite]])

[F4] Under Choice, $X\to\operatorname{Spec}k$ is smooth if and only if for every field extension $K/k$ every local ring of the base change $X_K$ is regular. ([[def-smooth-morphism-to-field-classical]])

[F5] Under Choice, for a finite-type $k$-algebra $A$ and $\mathfrak q\in\operatorname{Spec}A$, the local dimension is $\dim_{\mathfrak q}\operatorname{Spec}A=\dim A_{\mathfrak q}+\operatorname{trdeg}_k\kappa(\mathfrak q)$; and for a maximal ideal $\mathfrak m$ of a finite-type $k$-algebra the residue field $\kappa(\mathfrak m)$ is a finite extension of $k$. ([[lem-affine-local-dimension-residue-transcendence]], [[lem-finite-type-jacobson-residue-extension]])

[F6] Under Choice, a nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring; the valuation ring $V_v=\{x:v(x)\ge0\}$ of a discrete valuation is a valuation ring, and $v$ is surjective, so $V_v$ has an element of value $1$. ([[thm-one-dimensional-regular-local-rings-are-dvrs]], [[def-discrete-valuation-ring]])

[F7] A valuative diagram for a morphism $f:X\to S$ consists of a valuation ring $R\subseteq K$ with fraction field $K$ and morphisms $\operatorname{Spec}K\to X$, $\operatorname{Spec}R\to S$ forming a commutative square; a lift is a morphism $\operatorname{Spec}R\to X$ making both triangles commute. ([[def-valuative-diagram-separatedness]])

[F8] Under Choice, for a morphism $f:X\to S$ of finite type and quasi-separated, $f$ is proper if and only if every valuative diagram for $f$ over an arbitrary valuation ring has exactly one lift; a proper morphism is separated, of finite type and universally closed. ([[thm-valuative-criterion-properness]], [[def-proper-morphism]])

[F9] Under Choice, let $Y\to S$ be separated, $W$ an $S$-scheme and $V\subseteq W$ an open subscheme with $\mathcal O_W\to j_*\mathcal O_V$ injective, where $j:V\to W$ is the inclusion. Then any two $S$-morphisms $a,b:W\to Y$ with $a|_V=b|_V$ are equal; in particular this holds when $W$ is reduced and $V$ is dense open. ([[cor-morphisms-equal-on-dense-open-reduced-source]])

[F10] Two morphisms out of a scheme which agree on the members of an open cover glue uniquely to a morphism; compatible morphisms on an open cover extend. ([[lem-morphism-schemes-local-on-source-target]])

[F11] For an integral finite-type $k$-scheme $W$ the function field $k(W)=\mathcal O_{W,\eta}$ is the fraction field of $\Gamma(V,\mathcal O_W)$ for every nonempty affine open $V\subseteq W$, and $\mathcal O_{W,\eta}\subseteq k(W)$ is a field. ([[lem-integral-finite-type-scheme-function-field]], [[def-field-of-fractions]])

[F12] A morphism $Y\to S$ is separated if and only if its diagonal $\Delta:Y\to Y\times_SY$ is a closed immersion. ([[def-separated-morphism-schemes]])

[F13] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F14] A finite-type $k$-algebra is a quotient of a polynomial ring in finitely many variables over $k$; since a field is Noetherian, the Hilbert basis theorem and passage to quotients show that every finite-type $k$-algebra is Noetherian. Localizations of Noetherian rings are Noetherian. ([[def-finite-type-and-module-finite-algebras]], [[lem-field-is-noetherian]], [[thm-hilbert-basis-theorem]], [[thm-noetherian-ring-quotients-and-localisations]])

[F15] Since $Y\to\operatorname{Spec}k$ is proper, it is of finite type. The open affine chart $V=\operatorname{Spec}B$ is also of finite type over $k$ (finite type is affine-local and restricts to open subschemes), so $B$ is a finitely generated $k$-algebra. ([[def-proper-morphism]], [[def-locally-finite-type-and-finite-type-morphism]], [[lem-finite-type-local-on-source-and-target]], [[def-finite-type-and-module-finite-algebras]])

[F16] For a ring $A$ and $s\in A$, $\operatorname{Spec}A_s$ identifies with the distinguished open $D(s)\subseteq\operatorname{Spec}A$, with coordinate ring $A_s$; a ring map $B\to A_s$ induces a morphism $\operatorname{Spec}A_s\to\operatorname{Spec}B$. ([[def-principal-localisation]], [[lem-spectrum-localization-open-immersion]], [[thm-morphisms-into-affine-scheme-global-sections]])



## Proof

**Proof technique:** direct; extend the representative at each missing closed point by the valuative criterion and glue, spreading out the local lift to an honest neighbourhood.

1.1 Let $K=k(X)=\operatorname{Frac}\mathcal O_{X,x}$ for every closed point $x$, so that $K$ is simultaneously the function field of $X$ and the fraction field of each of the local rings considered below [F11, F1]. The complement $Z=X\setminus U$ is a proper closed subset of $X$: it is closed, and proper because $U$ is nonempty open and contains the generic point $\eta$ [F1]. By [F3] the set $Z$ is finite and every $x\in Z$ is a closed point of $X$. [F1, F3, F11, given]

1.2 Since $Y$ is proper over $k$, the structure morphism $Y\to\operatorname{Spec}k$ is separated, of finite type and universally closed, hence in particular quasi-separated; uniqueness of lifts in the valuative criterion will use the separatedness of $Y$, and existence will use properness in the form of [F8]. [F8, given]

1.3 Fix $x\in Z$. Choose an affine open $\operatorname{Spec}A\subseteq X$ containing $x$, so that $A$ is a finite-type $k$-domain and $\mathcal O_{X,x}=A_{\mathfrak m_x}$ for the maximal ideal $\mathfrak m_x$. By [F5] applied to $\mathfrak q=\mathfrak m_x$, and since $\kappa(\mathfrak m_x)$ is a finite extension of $k$ (whence $\operatorname{trdeg}_k\kappa(\mathfrak m_x)=0$), the local dimension at $x$ is $\dim\mathcal O_{X,x}$. That local dimension is $1$: every open neighbourhood of the closed point $x$ contains the generic point $\eta$ [F1], so each such neighbourhood has chain dimension one, and $X$ itself has dimension one [F1]. Hence $\dim\mathcal O_{X,x}=1$. The ring $\mathcal O_{X,x}$ is Noetherian because $A$ is a finite-type algebra over the field $k$ and localisations of Noetherian rings are Noetherian [F14]; it is regular because $x$ is a point of the smooth $k$-scheme $X$, hence a point of $X_k$ in the notation of [F4]. Therefore [F6] applies under Choice [F13] and $\mathcal O_{X,x}$ is a discrete valuation ring. [F1, F4, F5, F6, F13, F14, given]

2.1 Consequently $\mathcal O_{X,x}=V_v$ for a discrete valuation $v$ of $K$, so $\mathcal O_{X,x}$ is a valuation ring with fraction field $K$ and contains an element of value $1$ [F6, F11]; the valuative diagrams used below take $R=\mathcal O_{X,x}$. [F6, F11, step 1.1, step 1.3]

3.1 The composite $\operatorname{Spec}K\to U\xrightarrow{\varphi_U}Y$ is defined because $\eta\in U$ [F1], and it is a $k$-morphism; together with the structure morphism $\operatorname{Spec}\mathcal O_{X,x}\to\operatorname{Spec}k$ it makes the square of a valuative diagram for $Y\to\operatorname{Spec}k$ commute, the two composites $\operatorname{Spec}K\to Y\to\operatorname{Spec}k$ and $\operatorname{Spec}K\to\operatorname{Spec}\mathcal O_{X,x}\to\operatorname{Spec}k$ both being the structure morphism of $\operatorname{Spec}K$ [F7]. [F1, F7, step 2.1, given]

4.1 By [F8] and the properness of $Y$, under Choice [F13] this valuative diagram has a unique lift $g_x:\operatorname{Spec}\mathcal O_{X,x}\to Y$, whose restriction to the generic point $\operatorname{Spec}K$ is the given map $\operatorname{Spec}K\to U\to Y$ [F7]. [F7, F8, F13, step 1.2, step 3.1]

5.1 Spread out the local lift to a neighbourhood. Choose an affine open $\operatorname{Spec}A\subseteq X$ containing $x$, and write $\mathfrak m\subset A$ for the maximal ideal corresponding to $x$. Then $\mathcal O_{X,x}=A_{\mathfrak m}$, and the map $g_x$ is equivalently a $k$-algebra homomorphism $\rho:B\to A_{\mathfrak m}$ for any affine open $V=\operatorname{Spec}B\subseteq Y$ containing the image of the closed point of $\operatorname{Spec}A_{\mathfrak m}$. Such a chart exists, and its preimage under $g_x$ is an open subscheme of the local spectrum containing its closed point; the only such open is all of $\operatorname{Spec}A_{\mathfrak m}$. By [F15], choose $k$-algebra generators $b_1,\ldots,b_n$ of $B$. Write each $\rho(b_i)=a_i/t_i$ with $a_i\in A$ and $t_i\notin\mathfrak m$, and put $s=\prod_i t_i\notin\mathfrak m$. Then every $\rho(b_i)$ lies in $A_s$. Since $A$ is a domain and $s\ne0$, the localization map $A_s\to A_{\mathfrak m}$ is injective. Present $B$ as a quotient of $k[y_1,\ldots,y_n]$ using the chosen generators; every defining relation maps to zero in $A_{\mathfrak m}$ under $y_i\mapsto \rho(b_i)$, so injectivity shows it already maps to zero in $A_s$. Thus the generator assignment induces a $k$-algebra map $\widetilde\rho:B\to A_s$. By [F16] this map gives a $k$-morphism $\psi_x:D(s)=\operatorname{Spec}A_s\to V\subseteq Y$, on an open neighbourhood of $x$, and its restriction to $\operatorname{Spec}A_{\mathfrak m}$ is $g_x$. [F1, F15, F16, step 1.1, step 4.1]

6.1 The restriction of $\psi_x$ to the generic point of $D(s)$ is the generic map $\operatorname{Spec}K\to U\to Y$ of step 4.1, because $\psi_x$ restricts to $g_x$ on $\operatorname{Spec}A_{\mathfrak m}$ and $g_x$ restricts to that map. [F11, step 4.1, step 5.1]

7.1 Agreement near $x$. Put $W=D(s)\cap U$, a nonempty open subscheme of $X$ containing $\eta$, reduced as an open subscheme of the reduced scheme $X$ [F1]. Both $\psi_x|_W$ and $\varphi_U|_W$ are $k$-morphisms $W\to Y$. To see they are equal, form $h=(\psi_x|_W,\varphi_U|_W):W\to Y\times_kY$. Since $Y$ is separated over $k$, the diagonal $\Delta:Y\to Y\times_kY$ is a closed immersion [F12], so $Z:=h^{-1}(\Delta(Y))$ is a closed subscheme of $W$. By step 6.1 the restriction of $h$ to the generic point $\operatorname{Spec}K\to W$ factors through $\Delta$, so $Z$ contains the image of $\operatorname{Spec}K$, namely $\eta$; since $\eta$ is dense in $W$ [F1], the underlying space of $Z$ is all of $W$. As $W$ is reduced, a closed subscheme with the same underlying space equals $W$: on each local ring $\mathcal O_{W,p}$ a proper ideal $I$ with $\operatorname{Spec}(\mathcal O_{W,p}/I)=\operatorname{Spec}\mathcal O_{W,p}$ would be contained in the nilradical, which vanishes. Hence $Z=W$, so $h$ factors through the diagonal and $\psi_x|_W=\varphi_U|_W$. [F1, F12, step 6.1]

8.1 Gluing. The morphisms $\varphi_U:U\to Y$ and $\psi_x:D(s_x)\to Y$, one for each $x\in Z$ (where $D(s_x)$ is the neighbourhood produced in step 5.1), are defined on an open cover $U\cup\bigcup_{x\in Z}D(s_x)=X$ of $X$: indeed $X\setminus U=Z$ [step 1.1]. They are compatible: $\psi_x|_W=\varphi_U|_W$ on $W=D(s_x)\cap U$ by step 7.1, and for $x\ne x'$ the two morphisms $\psi_x,\psi_{x'}$ agree on the nonempty open $(D(s_x)\cap D(s_{x'}))\cap U$, which is dense in the reduced scheme $D(s_x)\cap D(s_{x'})$ because $X$ is irreducible [F1]; hence $\psi_x=\psi_{x'}$ on the overlap by [F9]. By [F10] the compatible morphisms glue to a unique $k$-morphism $F:X\to Y$ with $F|_U=\varphi_U$. [F1, F9, F10, step 7.1]

9.1 Uniqueness and the correspondence. If $F'\colon X\to Y$ is a second $k$-morphism with $F'|_U=\varphi_U$, then $F$ and $F'$ agree on the nonempty open, hence dense, subscheme $U$ of the reduced scheme $X$, so $F=F'$ by [F9] applied with $W=X$, $V=U$ and $S=\operatorname{Spec}k$. Thus each representative $(U,\varphi_U)$ extends to exactly one $k$-morphism $X\to Y$; conversely every $k$-morphism $X\to Y$ is a representative of a rational map with domain $X$, and the equivalence of two extensions is detected on $U$ by [F9], so the resulting map from rational maps to $k$-morphisms is a bijection. [F1, F2, F9, step 8.1]

10.1 Every assertion of the statement holds: existence of extensions over the finite set $Z=X\setminus U$ is step 8.1, surjectivity onto $k$-morphisms and injectivity (uniqueness) are step 9.1, and the description of the local rings as discrete valuation rings is step 1.3. The Axiom of Choice enters through [F3] at step 1.1, [F4] and [F5] at step 1.3, [F6] at step 1.3, [F8] at step 4.1, and [F9] at steps 7.1–9.1; the remaining cited inputs are choice-free. [F3, F4, F5, F6, F8, F9, F13, F14, step 1.1, step 1.3, step 4.1, step 7.1, step 8.1, step 9.1] ∎
