---
id: "lem-differentials-localization"
kind: "lemma"
title: "Kähler differentials commute with localization"
status: draft
origin: "pipeline"
deps: ["cor-derivations-represented-by-differentials", "def-localisation-of-a-module", "thm-universal-property-localisation-of-a-module", "thm-universal-property-of-localisation", "def-derivation-algebra", "def-multiplicative-subset-and-localisation"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.131.8"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §22.2.L, pp.583–584"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $A\xrightarrow{\varphi}B$ be a homomorphism of commutative rings, let
$U\subseteq B$ be a multiplicative subset and let $V\subseteq A$ be a
multiplicative subset with $\varphi(V)\subseteq U$. Then the canonical
$(U^{-1}B)$-linear map induced by the localization map $\lambda\colon B\to U^{-1}B$,
namely

$$U^{-1}\Omega_{B/A}\longrightarrow\Omega_{U^{-1}B/V^{-1}A}, \qquad \frac{\mathrm{d}b}{u}\longmapsto\frac{\mathrm{d}(b/1)}{u},$$

is an isomorphism of $U^{-1}B$-modules. The subsets $V=\{1\}$ and $U=\{1\}$ are
allowed; in the second case the map is the identity on $\Omega_{B/A}$. No
finiteness hypothesis is imposed on $B$ over $A$, and the result is not
asserted for an arbitrary ring homomorphism $B\to C$ that is not a localization.

## Facts & Assumptions

**Given:** A ring homomorphism $A\to B$, a multiplicative subset $U\subseteq B$ and a multiplicative subset $V\subseteq A$ with $\varphi(V)\subseteq U$.

[F1] [[cor-derivations-represented-by-differentials]]: for every ring map $R\to S$ with Kähler differential module $(\Omega_{S/R},\mathrm{d})$ and every $S$-module $N$, composition with $\mathrm{d}$ is a natural $S$-module isomorphism $\operatorname{Hom}_S(\Omega_{S/R},N)\cong\operatorname{Der}_R(S,N)$.

[F2] [[def-localisation-of-a-module]]: the localization $U^{-1}M$ of an $R$-module $M$ consists of the classes $m/u$ with $u\in U$, the canonical map is $m\mapsto m/1$, and the elements of $U^{-1}\Omega$ are exactly the classes $\omega/u$.

[F3] [[thm-universal-property-localisation-of-a-module]]: for an $R$-linear map $f\colon M\to N$ with $N$ an $S^{-1}R$-module, there is a unique $S^{-1}R$-linear $\widetilde f\colon S^{-1}M\to N$ with $\widetilde f(m/s)=(1/s)f(m)$.

[F4] [[thm-universal-property-of-localisation]]: if $f\colon R\to A$ sends every $s\in S$ to a unit, there is a unique unital ring homomorphism $\widetilde f\colon S^{-1}R\to A$ with $\widetilde f\circ\lambda_S=f$, given by $\widetilde f(r/s)=f(r)f(s)^{-1}$.

[F5] [[def-derivation-algebra]]: derivations are additive, constant on the base and satisfy the Leibniz rule, and these three laws characterise ring sections of the square-zero extension $C\oplus N$ by $(c,n)(c',n')=(cc',cn'+c'n)$.

[F6] [[def-multiplicative-subset-and-localisation]]: $U^{-1}B$ is a commutative ring, $\lambda\colon B\to U^{-1}B$ is a ring homomorphism, each $u\in U$ maps to a unit $1/u$, and $V^{-1}A$ is defined likewise.

## Proof

1.1 The canonical map. Since $\varphi(V)\subseteq U$, [F4] extends $A\to U^{-1}B$ uniquely to a ring map $V^{-1}A\to U^{-1}B$, and $\lambda\colon B\to U^{-1}B$ is an $A$-algebra homomorphism, and the composite $B\xrightarrow{\lambda}U^{-1}B\xrightarrow{\mathrm{d}'}\Omega_{U^{-1}B/V^{-1}A}$ is an $A$-derivation of $B$ into $\Omega_{U^{-1}B/V^{-1}A}$: it is additive, kills $\varphi(A)$, and satisfies Leibniz. By [F1] it corresponds to a $B$-linear $\rho\colon\Omega_{B/A}\to\Omega_{U^{-1}B/V^{-1}A}$ with $\rho(\mathrm{d}b)=\mathrm{d}'(b/1)$, and by [F3] applied to the canonical map $\lambda_{\Omega}\colon\Omega_{B/A}\to U^{-1}\Omega_{B/A}$ the map $\rho$ factors uniquely through a $U^{-1}B$-linear map $\alpha\colon U^{-1}\Omega_{B/A}\to\Omega_{U^{-1}B/V^{-1}A}$ with $\alpha(\omega/u)=(1/u)\rho(\omega)$; in particular $\alpha(\mathrm{d}b/u)=\mathrm{d}'(b/1)/u$. This is the canonical map of the statement. [F1, F2, F3, F4, F6]

1.2 A derivation of the localization. Let $E:=U^{-1}B\oplus U^{-1}\Omega_{B/A}$ with the product $(x,\omega)(x',\omega')=(xx',x\omega'+x'\omega)$, a commutative ring in which the second summand is an ideal of square zero, and let $s\colon B\to E$, $s(b):=(b/1,\mathrm{d}b)$. Then $s$ is a unital ring homomorphism: it is additive, and multiplicativity is exactly the Leibniz rule $\mathrm{d}(bb')=b\,\mathrm{d}b'+b'\,\mathrm{d}b$ of [F5]. For $u\in U$ the element $s(u)=(u/1,\mathrm{d}u)$ is a unit of $E$ with inverse $(1/u,-\mathrm{d}u/u^{2})$, since $(u/1)(-\mathrm{d}u/u^{2})+(1/u)\,\mathrm{d}u=-\mathrm{d}u/u+\mathrm{d}u/u=0$. By [F4] there is a unique unital ring homomorphism $\widetilde s\colon U^{-1}B\to E$ with $\widetilde s\circ\lambda=s$; writing $\widetilde s(x)=(s_1(x),D(x))$, the first coordinate $s_1$ is a unital ring homomorphism $U^{-1}B\to U^{-1}B$ with $s_1(\lambda(b))=b/1$, so $s_1=\mathrm{id}$ by the uniqueness clause of [F4] applied to the identity. Hence $\widetilde s(x)=(x,D(x))$. [F5, F6, F4, algebra]

2.1 The second coordinate is a derivation. Multiplicativity of $\widetilde s$ in the square-zero extension gives $D(xx')=xD(x')+x'D(x)$, and additivity of $\widetilde s$ gives $D(x+x')=D(x)+D(x')$. For $a\in A$ we have $\widetilde s(\lambda(\varphi(a)))=s(\varphi(a))=(\varphi(a)/1,0)$, so $D$ kills $\lambda\circ\varphi(A)$; since $D$ also kills $\lambda(\varphi(v))$ for $v\in V$ and $D$ satisfies Leibniz with $D(1)=0$, it kills the inverse of each such unit, hence the image of $V^{-1}A\to U^{-1}B$. So $D$ is a $V^{-1}A$-derivation of $U^{-1}B$ into the $U^{-1}B$-module $U^{-1}\Omega_{B/A}$, and by [F1] it corresponds to a $U^{-1}B$-linear map $\beta\colon\Omega_{U^{-1}B/V^{-1}A}\to U^{-1}\Omega_{B/A}$ with $\beta(\mathrm{d}'x)=D(x)$. [step 1.2, F1, F5]

3.1 The two maps are inverse. For $b\in B$ and $u\in U$, multiplicativity of $\widetilde s$ gives $D(b/u)=D(\lambda(b)\cdot(1/u))=(1/u)D(b)+(b/1)D(1/u)$, and $D(1/u)=-\mathrm{d}u/u^{2}$ because $0=D(1)=D((u/1)(1/u))=(1/u)D(u)+(u/1)D(1/u)$ with $D(u)=\mathrm{d}u$ from $\widetilde s(\lambda(u))=(u/1,\mathrm{d}u)$; hence $D(b/u)=(u\,\mathrm{d}b-b\,\mathrm{d}u)/u^{2}$. Therefore $\alpha(\beta(\mathrm{d}'(b/u)))=\alpha((u\,\mathrm{d}b-b\,\mathrm{d}u)/u^{2})=(u\,\mathrm{d}'(b/1)-b\,\mathrm{d}'(u/1))/u^{2}=\mathrm{d}'(b/u)$, the last equality being the derivation identity for the fraction $b/u$ with $u$ invertible, obtained from the Leibniz rule and $\mathrm{d}'(u\cdot(1/u))=0$. Since the elements $\mathrm{d}'(b/u)$ generate $\Omega_{U^{-1}B/V^{-1}A}$ over $U^{-1}B$, this gives $\alpha\circ\beta=\mathrm{id}$. Conversely $\beta(\alpha(\mathrm{d}b/u))=\beta(\mathrm{d}'(b/1)/u)=(1/u)D(b/1)=\mathrm{d}b/u$ for all $b\in B$, $u\in U$, and the elements $\mathrm{d}b/u$ generate $U^{-1}\Omega_{B/A}$ over $U^{-1}B$ by [F2], so $\beta\circ\alpha=\mathrm{id}$. Hence $\alpha$ is an isomorphism. Taking $V=\{1\}$ gives $V^{-1}A=A$ and taking $U=\{1\}$ makes $\lambda$ the identity, so both degenerate cases are covered by the same computation. [step 1.1, step 2.1, F2, F6] ∎
