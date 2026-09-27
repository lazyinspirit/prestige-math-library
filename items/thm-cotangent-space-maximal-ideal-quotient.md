---
id: "thm-cotangent-space-maximal-ideal-quotient"
kind: "theorem"
title: "Cotangent space at a rational point"
status: published
origin: "pipeline"
deps: ["thm-conormal-exact-sequence-algebra", "lem-sheaf-differentials-affine-compatibility", "def-relative-cotangent-space", "cor-derivations-represented-by-differentials", "lem-differentials-localization", "def-residue-field-scheme-point", "def-scheme-over-base"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra, Lemma 10.131.10 (tag 00RW)"
      url: "https://stacks.math.columbia.edu/tag/00RW"
    - title: "Vakil 22.2.18, pp.582-583"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Let $k$ be a field, let $X$ be a $k$-scheme
([[def-scheme-over-base]]) and let $x\in X$ be a $k$-**rational** point, that is,
a point whose residue field $\kappa(x)$ is $k$ under the canonical map
$k\to\kappa(x)$ ([[def-residue-field-scheme-point]]). Write
$R=\mathcal O_{X,x}$ and $\mathfrak m=\mathfrak m_x$, so that $R/\mathfrak m=k$.
Then the map

$$\mathfrak m/\mathfrak m^2\longrightarrow\Omega_{X/k}\otimes_{\mathcal O_{X,x}}\kappa(x), \qquad [a]\longmapsto\mathrm d_{X/k}(a)\otimes1,$$

is an isomorphism of $k$-vector spaces; here $[a]$ denotes the class of
$a\in\mathfrak m$ modulo $\mathfrak m^2$ and the relative cotangent space is as
in [[def-relative-cotangent-space]]. The isomorphism is natural in pairs
$(X,x)$ of $k$-schemes with a $k$-rational point. No analogous statement is made
for a point whose residue field is a nontrivial extension of $k$, not even a
purely inseparable one.

## Facts & Assumptions

**Given:** A field $k$, a $k$-scheme $X$ and a $k$-rational point $x\in X$ with $R=\mathcal O_{X,x}$, $\mathfrak m=\mathfrak m_x$ and $R/\mathfrak m=k$.

[F1] [[thm-conormal-exact-sequence-algebra]]: for a ring map $A\to P$ with ideal $I\subseteq P$ and $B=P/I$, the sequence $I/I^2\to B\otimes_P\Omega_{P/A}\to\Omega_{B/A}\to0$ is exact, the first map sending the class of $t$ to $1\otimes\mathrm dt$.

[F2] [[cor-derivations-represented-by-differentials]]: for a ring map $C\to D$ and every $D$-module $N$, composition with the universal derivation is a natural bijection $\operatorname{Hom}_D(\Omega_{D/C},N)\cong\operatorname{Der}_C(D,N)$. In particular $\Omega_{k/k}=0$, since $\operatorname{Der}_k(k,N)=0$ for every $k$-module $N$.

[F3] [[lem-sheaf-differentials-affine-compatibility]] and [[lem-differentials-localization]]: on an affine chart $\operatorname{Spec}B\ni x$ the sections of $\Omega_{X/k}$ over basic opens are $\Omega_{B_g/k}$, so passing to the stalk at $x$ gives $(\Omega_{X/k})_x\cong\Omega_{R/k}$ and hence $\Omega_{X/k}\otimes_{\mathcal O_{X,x}}\kappa(x)\cong k\otimes_R\Omega_{R/k}$.

[F4] [[def-relative-cotangent-space]]: the relative cotangent space at $x$ is $\Omega_{X/k}\otimes_{\mathcal O_{X,x}}\kappa(x)$, an object over $\kappa(x)=k$.

## Proof

**Proof technique:** direct.

1.1 The conormal sequence at the point. Apply [F1] to the ring map $k\to R$ and the ideal $\mathfrak m\subseteq R$ with quotient $R/\mathfrak m=k$: the sequence
$$\mathfrak m/\mathfrak m^2\longrightarrow k\otimes_R\Omega_{R/k}\longrightarrow\Omega_{k/k}\longrightarrow0$$
is exact, the first map sending $[a]$ to $1\otimes\mathrm da$, and the middle term is $k\otimes_R\Omega_{R/k}$ with $k=R/\mathfrak m$. By [F2] the last term vanishes, so the first map is surjective. [F1, F2, given]

1.2 A retraction. Define $D\colon R\to\mathfrak m/\mathfrak m^2$ by $D(a):=[a-\varepsilon(a)]$, where $\varepsilon\colon R\to R/\mathfrak m=k$ is the residue map and $[\,\cdot\,]$ is the class modulo $\mathfrak m^2$. Then $D$ is additive, kills $k$ since $\varepsilon$ is the identity on $k\subseteq R$, and is a $k$-derivation: $D(ab)-aD(b)-bD(a)=[-(a-\varepsilon(a))(b-\varepsilon(b))]=0$ in $\mathfrak m/\mathfrak m^2$, because both $a-\varepsilon(a)$ and $b-\varepsilon(b)$ belong to $\mathfrak m$. Here elements of $k$ are viewed in $R$ via its structure map, which splits $\varepsilon$, and $R$ acts on $\mathfrak m/\mathfrak m^2$ through $\varepsilon$. By [F2] applied to $k\to R$ there is an $R$-linear $\widetilde D\colon\Omega_{R/k}\to\mathfrak m/\mathfrak m^2$ with $\widetilde D(\mathrm da)=D(a)$; since $\mathfrak m\cdot(\mathfrak m/\mathfrak m^2)=0$, it kills $\mathfrak m\Omega_{R/k}$ and therefore factors through an $R$-linear, hence $k$-linear, map $\psi\colon k\otimes_R\Omega_{R/k}\to\mathfrak m/\mathfrak m^2$. [F2, given]

2.1 The identification of the target. By [F3] applied to an affine chart of $X$ containing $x$, the stalk of $\Omega_{X/k}$ at $x$ is $\Omega_{R/k}$, so the relative cotangent space of [F4], namely the residue-field tensor product $\Omega_{X/k}\otimes_{\mathcal O_{X,x}}\kappa(x)$ of the statement, is $k\otimes_R\Omega_{R/k}$; under this identification the element $\mathrm d_{X/k}(a)\otimes1$ for $a\in R$ corresponds to $1\otimes\mathrm da$. Hence the map of the statement is the first map of the exact sequence of step 1.1, and it is natural in $(X,x)$ because the identification is induced by the universal derivation and localization. [F1, F3, F4, step 1.1]

2.2 $\psi$ is a left inverse of the first map. For $a\in\mathfrak m$ one has $\psi(1\otimes\mathrm da)=\widetilde D(\mathrm da)=D(a)=[a]$, because $\varepsilon(a)=0$. Hence $\psi$ is a left inverse of the map $[a]\mapsto1\otimes\mathrm da$ of step 1.1, which is therefore injective. [step 1.1, step 1.2]

3.1 Conclusion. The map of step 1.1 is surjective by step 1.1 and injective by step 2.2, hence an isomorphism $\mathfrak m/\mathfrak m^2\cong k\otimes_R\Omega_{R/k}$; by step 2.1 this is exactly the map of the statement, which is therefore an isomorphism of $k$-vector spaces, natural in $(X,x)$. Nothing was used about $x$ beyond $\kappa(x)=k$, and the hypothesis is essential to the argument: for a point with $\kappa(x)\neq k$ the residue map is not a $k$-algebra section of $R\to\kappa(x)$ in general, and no such retraction is constructed. [step 2.1, step 2.2] ∎
