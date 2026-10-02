---
id: lem-proper-normal-curve-rational-function-map
kind: lemma
title: "Proper normal curve rational function map"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-dimension-noetherian-topological-space
  - def-proper-morphism
  - def-scheme
  - def-integral-scheme
  - def-krull-dimension-of-a-ring
  - lem-integral-finite-type-scheme-function-field
  - def-locally-finite-type-and-finite-type-morphism
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - lem-curve-closed-subsets-finite
  - thm-affine-domain-dimension-transcendence-degree
  - cor-specialisation-order-is-prime-inclusion
  - thm-normality-is-local-for-domains
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - def-discrete-valuation-ring
  - def-discrete-valuation
  - def-valuation-on-a-field
  - lem-normal-domain-implies-s-two
  - lem-r-one-s-two-intersection-of-height-one-localisations
  - def-sheaf-on-topological-space
  - def-stalk-of-presheaf
  - cor-transcendence-degree-tower-additivity
  - thm-finitely-generated-algebraic-extensions-are-finite
  - def-relative-projective-space-standard-charts
  - thm-projective-space-proper-over-base
  - thm-morphisms-into-affine-scheme-global-sections
  - lem-morphism-schemes-local-on-source-target
  - lem-proper-source-to-separated-target-proper
  - lem-quasi-finite-morphism-fibre-characterization
  - def-quasi-finite-morphism-schemes
  - def-finite-morphism-schemes
  - thm-proper-quasi-finite-is-finite
  - def-residue-field-scheme-point
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - cor-polynomial-ring-over-a-field-is-a-pid
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, §§31.14–31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
    - title: "The Stacks Project, Exercises, Definition 111.49.1(6)–(8)"
      url: "https://stacks.math.columbia.edu/tag/02AR"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and
let $C$ be a proper curve over $k$ ([[def-degree-divisor-proper-curve]]) that
is **normal**, meaning that every local ring $\mathcal O_{C,x}$ is an
integrally closed domain. Let $K=k(C)=\mathcal O_{C,\eta}$ be the function
field of $C$ at its generic point
([[lem-integral-finite-type-scheme-function-field]]) and let
$f\in K^{\times}$.

1. **Algebraic case.** If $f$ is algebraic over $k$, then $f$ and $f^{-1}$
   are global units: $f\in\Gamma(C,\mathcal O_C)^{\times}$.
2. **Transcendental case.** If $f$ is transcendental over $k$, then
   $d=[K:k(f)]$ is finite and there is a finite locally free dominant morphism
   $$\varphi_f:C\longrightarrow\mathbb P^1_k$$
   of degree $d$. For the standard chart coordinates $t=x^{(0)}_1$ and
   $s=x^{(1)}_0$ on $\mathbb P^1_k$
   ([[def-relative-projective-space-standard-charts]]), its pullbacks are
   $\varphi_f^{\#}(t)=f$ and $\varphi_f^{\#}(s)=f^{-1}$. The images in $K$ of
   the target chart coordinate rings $k[t]$ and $k[s]$ are respectively
   $k[f]$ and $k[f^{-1}]$. The coordinate rings of the affine preimages of
   these charts may be larger; each is finite free of rank $d$ over its
   target chart coordinate ring.

Thus the finite dominant morphism conclusion applies in the transcendental
case. Over a general field, being outside $k$ does not imply transcendence:
for a finite extension $L/k$, an element $a\in L\setminus k$ on the normal
proper curve $\mathbb P^1_L$ is algebraic over $k$ and a global unit. Its
constant map to $\mathbb P^1_k$ has closed image, not a dominant image.

## Facts & Assumptions
**Given:** A field $k$, a normal proper curve $C$ over $k$ with generic point $\eta$ and function field $K=k(C)=\mathcal O_{C,\eta}$, an element $f\in K^{\times}$, and the Axiom of Choice.

[F1] A proper curve is integral, has chain dimension one, and its structure map to $\operatorname{Spec}k$ is proper; a proper morphism is separated, of finite type, and universally closed. ([[def-degree-divisor-proper-curve]], [[def-dimension-noetherian-topological-space]], [[def-proper-morphism]])

[F2] Every point of a scheme has an affine open neighbourhood. Nonempty affine opens of an integral scheme have coordinate rings that are domains. Finite-type algebras over a field are Noetherian; a proper finite-type curve is quasi-compact, so a finite affine cover makes its underlying space Noetherian. ([[def-scheme]], [[def-integral-scheme]], [[def-locally-finite-type-and-finite-type-morphism]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]])

[F3] For every nonempty affine open $\operatorname{Spec}A\subseteq C$, $K=\operatorname{Frac}(A)$ and $K/k$ is finitely generated. ([[lem-integral-finite-type-scheme-function-field]])

[F4] Krull dimension is the supremum of lengths of strict prime chains, and strict prime inclusion in an affine spectrum is specialization. For a finite-type $k$-domain $A$, $\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$. ([[def-krull-dimension-of-a-ring]], [[cor-specialisation-order-is-prime-inclusion]], [[thm-affine-domain-dimension-transcendence-degree]])

[F5] Each prime localization of an affine chart ring is a local ring of $C$; if every prime localization of a domain is integrally closed, then the domain is integrally closed ([[thm-normality-is-local-for-domains]]).

[F6] A stalk is the filtered colimit of sections over neighbourhoods, and compatible sections glue uniquely. On a nonempty affine open of an integral scheme, sections embed into its fraction field. These facts identify regularity of a rational function at a point with membership in that local ring, and let compatible local representatives glue. ([[def-stalk-of-presheaf]], [[def-sheaf-on-topological-space]], [[def-integral-scheme]], [[lem-integral-finite-type-scheme-function-field]])

[F7] A Noetherian integrally closed domain localized at a height-one prime is a discrete valuation ring. ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]], [[def-discrete-valuation-ring]])

[F8] A discrete valuation ring is the nonnegative locus of a discrete valuation $v:K\to\mathbb Z\cup\{\infty\}$ with $v(0)=\infty$, $v(ab)=v(a)+v(b)$, and $v(a+b)\ge\min(v(a),v(b))$; its ring is the set of elements with nonnegative valuation. In particular, a sum with a unique term of least valuation has that finite valuation. ([[def-discrete-valuation-ring]], [[def-discrete-valuation]], [[def-valuation-on-a-field]])

[F9] A Noetherian integrally closed domain satisfies $(S_2)$, and a Noetherian domain satisfying $(S_2)$ is the intersection of its height-one localizations inside its fraction field. ([[lem-normal-domain-implies-s-two]], [[lem-r-one-s-two-intersection-of-height-one-localisations]])

[F10] On a finite-type integral curve of chain dimension one, every point other than the generic point is closed, and every proper closed subset is a finite set of closed points. ([[lem-curve-closed-subsets-finite]])

[F11] The standard charts of $\mathbb P^1_k$ are $\operatorname{Spec}k[t]$ and $\operatorname{Spec}k[s]$, with $s=t^{-1}$ on their overlap; $\mathbb P^1_k$ is separated over $k$. ([[def-relative-projective-space-standard-charts]], [[thm-projective-space-proper-over-base]])

[F12] A section of the structure sheaf on a scheme defines a morphism to the affine scheme whose coordinate ring is the source of the corresponding global-sections ring map. ([[thm-morphisms-into-affine-scheme-global-sections]])

[F13] Compatible morphisms on an open cover glue uniquely to a morphism. ([[lem-morphism-schemes-local-on-source-target]])

[F14] A morphism from a proper $k$-scheme to a separated $k$-scheme is proper. ([[lem-proper-source-to-separated-target-proper]])

[F15] A finite-type morphism is quasi-finite exactly when each point is isolated in its fibre and has finite residue-field extension; proper quasi-finite morphisms are finite, and finite morphisms have affine preimages of affine opens with finite coordinate modules. ([[lem-quasi-finite-morphism-fibre-characterization]], [[def-quasi-finite-morphism-schemes]], [[thm-proper-quasi-finite-is-finite]], [[def-finite-morphism-schemes]])

[F16] A closed point of a finite-type $k$-scheme has residue field finite over $k$. At a point $x$, the residue field is $\kappa(x)=\mathcal O_{C,x}/\mathfrak m_x$. ([[def-residue-field-scheme-point]], [[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]])

[F17] Transcendence degree is additive in towers, and a finitely generated algebraic field extension is finite. ([[cor-transcendence-degree-tower-additivity]], [[thm-finitely-generated-algebraic-extensions-are-finite]])

[F18] The polynomial rings $k[t]$ and $k[s]$ are principal ideal domains, and a finitely generated torsion-free module over a PID is finite free. ([[cor-polynomial-ring-over-a-field-is-a-pid]], [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]])

[A1] The Axiom of Choice is assumed throughout ([[def-axiom-of-choice]]).

## Proof

We establish the curve's dimension and closed-point DVRs first. In the algebraic
case, valuation nonnegativity and the height-one intersection yield global
units. In the transcendental case, the regular loci define compatible maps to
the two projective-line charts; dominance, properness and fibre analysis give
finiteness, and the actual affine-preimage algebras give the degree.

1.1 The scheme $C$ is integral, proper, finite type, and has chain dimension one; its nonempty affine coordinate rings are Noetherian domains, and $K/k$ is finitely generated. [F1, F2, F3]

1.2 The function field has transcendence degree one: $\operatorname{trdeg}_kK=1$. By the chain-dimension definition, there are nonempty irreducible closed subsets $Z_0\subsetneq Z_1$ of $C$. The proper closed subset $Z_0$ contains a point $x$, which is not the generic point and therefore is closed by [F10]. Choose an affine neighbourhood $\operatorname{Spec}A$ of $x$, and let $\mathfrak p$ be its prime. Since $x$ is not generic, $\mathfrak p\ne(0)$; because $A$ is a domain, $(0)\subsetneq\mathfrak p$, so $\dim A\ge1$. A prime chain of length at least two in $A$ would give a strict chain of the same length of irreducible closed subsets in the open chart and, by taking closures in $C$, contradict $\dim C=1$; strictness is preserved because each closure meets the open chart in its original closed subset. Hence $\dim A=1$, and [F4] gives $\operatorname{trdeg}_kK=1$. [F1, F3, F4, F10, A1, choose, algebra]

1.3 **Algebraic case.** Suppose $f$ is algebraic over $k$. Then both $f$ and $f^{-1}$ are algebraic over $k$ and have monic polynomial equations over $k$. [given, algebra]

2.1 Every closed point $x$ has a discrete valuation ring $\mathcal O_{C,x}$. In an affine neighbourhood $\operatorname{Spec}A$ of $x$, the corresponding prime $\mathfrak p$ is nonzero and has height one: it has height at least one, and a longer prime chain would contradict the chain dimension of $C$ as in step 1.2. The ring $A$ is Noetherian by [F2]. Its prime localizations are the local rings of $C$, all integrally closed by normality, so [F5] makes $A$ integrally closed. Now [F7] applies to $A_{\mathfrak p}=\mathcal O_{C,x}$, whose fraction field is $K$ by [F3]. [F1, F2, F3, F5, F7, F10, A1, step 1.1, step 1.2]

2.2 **Transcendental case.** Suppose $f$ is transcendental over $k$. Then $k(f)$ has transcendence degree one over $k$. Since $K/k$ is finitely generated, the same finite list of field generators also generates $K$ over $k(f)$, so $K/k(f)$ has finite transcendence degree. By step 1.2 and additivity of transcendence degree, that relative transcendence degree is zero, and $K/k(f)$ is algebraic. It is a finitely generated algebraic extension, hence finite by [F17]. Write $d=[K:k(f)]$. [F3, F17, step 1.2, given]

3.1 In the algebraic case, for every closed point $x$ one has $v_x(f)\ge0$ and $v_x(f^{-1})\ge0$. Consider a monic equation $p(f)=f^n+\sum_{i<n}a_if^i=0$. If $v_x(f)<0$, omit the zero coefficients: each remaining $a_i\in k^\times$ is a unit in $\mathcal O_{C,x}$ because $k$ is a field, so it has valuation zero, and $v_x(f^n)=n v_x(f)<i v_x(f)=v_x(a_if^i)$ for every remaining term. Thus the leading term is the unique term of least valuation. By [F8] the sum has finite valuation $n v_x(f)$, contradicting $v_x(0)=\infty$. The same argument applied to a monic equation for $f^{-1}$ proves the second inequality. Therefore both valuations are nonnegative and, since $v_x(f^{-1})=-v_x(f)$, both are zero. [F8, step 2.1, step 1.3, algebra]

3.2 For each closed point $x$, step 2.1 gives a DVR, so either $f\in\mathcal O_{C,x}$ or $f^{-1}\in\mathcal O_{C,x}$. Both belong to $\mathcal O_{C,\eta}=K$. Let $U_0$ be the set where $f$ is regular and $U_1$ the set where $f^{-1}$ is regular. Membership in a stalk is represented by a section on a neighbourhood; therefore each $U_i$ is open. They contain the generic point and, by the DVR alternative at every closed point, cover $C$. This argument uses no algebraicity of $f$. [F6, F8, step 2.1, F10, A1, given]

4.1 Hence in the algebraic case $f$ and $f^{-1}$ belong to every affine coordinate ring $A$. Indeed, by [F5] each such $A$ is integrally closed; it is Noetherian by [F2], so [F9] expresses $A$ as the intersection of its height-one localizations. Each height-one prime corresponds to a closed point by [F10], and [F7] identifies its localization with the DVR at that point; step 3.1 puts both rational functions in each such localization. These functions on the affine cover agree in $K$ and glue by [F6] to global sections whose product is $1$. Thus $f\in\Gamma(C,\mathcal O_C)^\times$. [F2, F5, F6, F7, F9, F10, A1, step 3.1]

4.2 The regular section $f|_{U_0}$ gives a morphism $U_0\to\operatorname{Spec}k[t]$, with $t\mapsto f$, by [F12]; compose it with the standard chart inclusion into $\mathbb P^1_k$. Similarly $f^{-1}|_{U_1}$ gives a morphism $U_1\to\operatorname{Spec}k[s]\subseteq\mathbb P^1_k$, with $s\mapsto f^{-1}$. These constructions use sections on the actual opens $U_0,U_1$; they do not require $f$ to belong to an arbitrary affine coordinate ring or use a localization such as $A_f$. [F11, F12, step 3.2]

5.1 On $U_0\cap U_1$, the sections $f$ and $f^{-1}$ are reciprocal, so $f$ is a unit there and the chart transition is $s=t^{-1}$. The two morphisms of step 4.2 therefore agree on the overlap. By [F13] they glue to a morphism $\varphi_f:C\to\mathbb P^1_k$ with $\varphi_f^\#(t)=f$ and $\varphi_f^\#(s)=f^{-1}$. [F11, F13, step 4.2]

6.1 The morphism $\varphi_f$ is dominant. On function fields, its pullback sends the indeterminate $t$ to the transcendental element $f$, so $k(t)\to K$ is injective and the generic point of $C$ maps to the generic point of $\mathbb P^1_k$. [step 2.2, step 5.1, algebra]

6.2 The morphism $\varphi_f$ is proper: $C$ is proper over $k$ by [F1], and $\mathbb P^1_k$ is separated over $k$ by [F11], so [F14] applies. [F1, F11, F14, A1, step 5.1]

7.1 The morphism is quasi-finite. First let $y$ be a closed point of $\mathbb P^1_k$. Its fibre is closed and is not all of $C$, since $\varphi_f$ is dominant. By [F10] it is a finite set of closed points, so each point is isolated in the fibre. The residue extension $\kappa(x)/\kappa(y)$ is finite for each such point: [F16] makes $\kappa(x)/k$ finite, and the point map embeds $\kappa(y)$ into $\kappa(x)$. Now let $y$ be the generic point of $\mathbb P^1_k$. A closed point $x$ mapping to $y$ would induce an embedding $k(t)=\kappa(y)\hookrightarrow\kappa(x)$, impossible because $\kappa(x)/k$ is finite and $t$ is transcendental. The only point of $C$ left is its generic point $\eta$, which maps to $y$; it is isolated in this one-point fibre and its residue extension is $K/k(f)$, finite of degree $d$ by step 2.2. The fibre criterion [F15] now gives quasi-finiteness. [F10, F15, F16, A1, step 2.2, step 6.1, given]

8.1 Since $\varphi_f$ is proper by step 6.2 and quasi-finite by step 7.1, it is finite by [F15]. [F15, A1, step 6.2, step 7.1]

9.1 Let $V_0=\operatorname{Spec}k[t]$ and $V_1=\operatorname{Spec}k[s]$ be the target charts. Finiteness gives affine preimages $\varphi_f^{-1}(V_i)=\operatorname{Spec}B_i$, where each $B_i$ is a finite module over the corresponding chart ring $R_0=k[t]$ or $R_1=k[s]$. Each preimage contains $\eta$, since $\eta$ maps to the generic point of $\mathbb P^1_k$, which belongs to both charts. Thus $B_i$ is a domain with fraction field $K$ by [F3]. Dominance embeds $R_i$ into $B_i\subseteq K$, so $B_i$ is torsion-free over $R_i$. By [F18], each $B_i$ is a free $R_i$-module. Its generic localization is a finite-dimensional domain over $k(t)$, respectively $k(s)$, hence a field. Since its fraction field is $K$, it equals $K$; under $s=f^{-1}$ we have $k(s)=k(f)$. Therefore each free module has rank $\dim_{k(f)}K=[K:k(f)]=d$. The two target charts cover $\mathbb P^1_k$, so $\varphi_f$ is finite locally free of degree $d$. [F3, F11, F15, F18, step 5.1, step 6.1, step 8.1]

10.1 The target coordinate-ring maps in step 4.2 have images $k[f]$ and $k[f^{-1}]$ in $K$. These are not in general the full coordinate rings $B_0,B_1$ of the affine preimages; step 9.1 proves that the latter are finite free of rank $d$ over the respective target chart rings. This completes the transcendental case. [step 4.2, step 9.1] ∎
