---
id: ex-additive-and-infinitesimal-group-schemes
kind: example
title: "Additive and infinitesimal group schemes"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: ["def-axiom-of-choice", "def-group-scheme-over-a-field", "def-morphism-and-closed-subgroup-scheme", "def-closed-immersion-schemes", "thm-affine-scheme-ring-anti-equivalence", "thm-affine-fibre-product-tensor-ring", "lem-general-linear-group-scheme-and-its-coordinate-ring", "lem-hopf-ideal-kernels-and-quotients", "lem-quotient-spectrum-map-is-a-closed-immersion", "def-commutative-hopf-algebra-over-a-field", "def-polynomial-ring-over-a-commutative-ring"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 2 §2.1-2.5, printed pp. 39-41 and p. 44 (PDF 50-52 and 55): the additive and multiplicative groups and the group schemes alpha_{p^m}, mu_{p^m} with their coordinate rings."
    - title: "The Stacks Project, Groupoid Schemes chapter"
      url: "https://stacks.math.columbia.edu/download/groupoids.pdf"
      locator: "§5, Examples 5.1-5.4 [022U, 040M, 022V, 022W], printed pp. 5-6: coordinate formulas for G_a, roots of unity, G_m and GL_n."
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice for the finite-type assertions inherited from the matrix-group supplier. Let $k$ be a field. (a) $\mathbf G_a=\operatorname{Spec}k[t]$ with comultiplication $\Delta(t)=t\otimes1+1\otimes t$, counit $\varepsilon(t)=0$ and antipode $S(t)=-t$ is a group scheme of finite type over $k$ with $\mathbf G_a(R)=(R,+)$ for every commutative $k$-algebra $R$. (b) If $\operatorname{char}k=p>0$, then $\alpha_p=\operatorname{Spec}k[t]/(t^p)$, with the comultiplication induced by that of $\mathbf G_a$, is a closed subgroup scheme of $\mathbf G_a$ with $\alpha_p(R)=\{a\in R:a^p=0\}$, and $\mu_p=\operatorname{Spec}k[t,t^{-1}]/(t^p-1)$, with the comultiplication of the multiplicative group scheme ([[lem-general-linear-group-scheme-and-its-coordinate-ring]]), is a closed subgroup scheme of $\mathbf G_m$ with $\mu_p(R)=\{a\in R^\times:a^p=1\}$. The coordinate rings of $\alpha_p$ and $\mu_p$ are isomorphic to $k[s]/(s^p)$ for $s=t$ respectively $s=t-1$, so both are finite nonreduced $k$-schemes of length $p$, while $\mathbf G_a$ and $\mathbf G_m$ are reduced.

## Facts & Assumptions

**Given:** The Axiom of Choice and a field $k$, and in part (b) an integer $p=\operatorname{char}k>0$.

[F1] [[def-group-scheme-over-a-field]]: a group scheme over $k$ is a finite-type $k$-scheme with multiplication, identity and inverse satisfying the group identities, and $G(T)=\operatorname{Hom}_k(T,G)$ carries a group law natural in $T$.

[F2] [[def-commutative-hopf-algebra-over-a-field]]: a commutative Hopf algebra is a commutative $k$-algebra with $k$-algebra maps $\Delta,\varepsilon,S$ satisfying coassociativity, the counit identities and the antipode identities.

[F3] [[thm-affine-scheme-ring-anti-equivalence]] and [[thm-affine-fibre-product-tensor-ring]]: $\operatorname{Spec}$ is a contravariant equivalence from commutative $k$-algebras to affine $k$-schemes, and $\operatorname{Spec}B\times_{\operatorname{Spec}k}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_kC)$; under the assumed Axiom of Choice, a commutative Hopf algebra that is finitely generated as a $k$-algebra therefore defines a group scheme of finite type in the convention of [F1], whose group law is induced by $\Delta$.

[F4] [[def-polynomial-ring-over-a-commutative-ring]]: $k[t]$ is the polynomial ring in one variable, with basis $1,t,t^2,\dots$ as a $k$-vector space, and $k[t,t^{-1}]$ denotes the principal localisation at $t$.

[F5] [[lem-general-linear-group-scheme-and-its-coordinate-ring]]: $\mathbf G_m=\operatorname{GL}_1=\operatorname{Spec}k[t,t^{-1}]$ is the multiplicative group scheme with $\Delta(t)=t\otimes t$, $\varepsilon(t)=1$, $S(t)=t^{-1}$ and $\mathbf G_m(R)=R^\times$.

[F6] [[lem-hopf-ideal-kernels-and-quotients]]: if $\mathfrak a$ is a Hopf ideal of a commutative Hopf algebra $A$, then $A/\mathfrak a$ carries a unique commutative Hopf algebra structure making $A\to A/\mathfrak a$ a morphism of Hopf algebras.

[F7] [[lem-quotient-spectrum-map-is-a-closed-immersion]] and [[def-morphism-and-closed-subgroup-scheme]]: a surjective homomorphism of commutative rings induces a closed immersion of affine spectra, and a closed subscheme whose coordinate map is a Hopf-algebra morphism and which is stable under the group laws is a closed subgroup scheme ([[def-closed-immersion-schemes]]).

## Verification

**Proof technique:** direct.

1.1 The additive group. On the generator $t$ of $k[t]$, the assignments $\Delta(t)=t\otimes1+1\otimes t$, $\varepsilon(t)=0$, $S(t)=-t$ are algebra maps satisfying the Hopf identities of [F2]: both iterated comultiplications give $t\otimes1\otimes1+1\otimes t\otimes1+1\otimes1\otimes t$, the two counit composites give $t$, and the two antipode composites give $S(t)\cdot1+1\cdot t=-t+t=0=\varepsilon(t)\cdot1$. Thus $k[t]$ is a commutative Hopf algebra, so by [F3] $\mathbf G_a=\operatorname{Spec}k[t]$ is a group scheme, of finite type since $k[t]$ is finitely generated over $k$ by [F4]. For a commutative $k$-algebra $R$, $\mathbf G_a(R)=\operatorname{Hom}_k(k[t],R)\cong R$ via $t\mapsto a$, and the group law induced by $\Delta$ sends the pair $(a,b)$ to the homomorphism with $t\mapsto a\cdot1+1\cdot b=a+b$, so $\mathbf G_a(R)=(R,+)$; since $k[t]$ is an integral domain it is reduced. [F1, F2, F3, F4, algebra]

1.2 The multiplicative group. On $k[t,t^{-1}]$ the assignments $\Delta(t)=t\otimes t$, $\varepsilon(t)=1$, $S(t)=t^{-1}$ are algebra maps satisfying the Hopf identities: $\Delta(t)$ and $t$ are units with the stated inverses, both iterated comultiplications give $t\otimes t\otimes t$, the counit composites give $t\cdot1=t$, and the antipode composites give $t\cdot t^{-1}=1=\varepsilon(t)$. Hence $k[t,t^{-1}]$ is a commutative Hopf algebra and $\mathbf G_m=\operatorname{Spec}k[t,t^{-1}]$ is the group scheme with $\mathbf G_m(R)=R^\times$ and group law multiplication, agreeing with [F5]; $k[t,t^{-1}]$ is a domain, so $\mathbf G_m$ is reduced. [F1, F2, F3, F4, F5, algebra]

1.3 The infinitesimal schemes. Let $\operatorname{char}k=p>0$. The quotient algebras $k[t]/(t^p)$ and $k[t,t^{-1}]/(t^p-1)$ are finitely generated over $k$, by the images of $t$ and of $t,t^{-1}$ respectively, so [F3] applies once their Hopf structures are established. The quotient map $k[t]\to k[t]/(t^p)$ is a morphism of Hopf algebras: in $k[t]/(t^p)\otimes k[t]/(t^p)$ one has $\Delta(t)^p=(t\otimes1+1\otimes t)^p=t^p\otimes1+1\otimes t^p=0$ because the intermediate binomial coefficients are divisible by $p$, so $\Delta$ descends; likewise $\varepsilon(t^p)=0$ and $S(t)^p=(-t)^p=-t^p=0$, so $(t^p)$ is a Hopf ideal and [F6] gives $k[t]/(t^p)$ a quotient Hopf algebra structure with $\alpha_p=\operatorname{Spec}k[t]/(t^p)$ a group scheme, the closed immersion $\alpha_p\hookrightarrow\mathbf G_a$ of [F7] being a morphism of group schemes. Similarly, in $k[t,t^{-1}]/(t^p-1)$ one has $\Delta(t)^p=t^p\otimes t^p=1$, $\varepsilon(t^p)=1$ and $S(t)^p=(t^{-1})^p=(t^p)^{-1}=1$, so $(t^p-1)$ is a Hopf ideal and $\mu_p=\operatorname{Spec}k[t,t^{-1}]/(t^p-1)$ is a group scheme with a closed-immersion morphism $\mu_p\hookrightarrow\mathbf G_m$ of group schemes. Evaluating on a commutative $k$-algebra $R$, a homomorphism $k[t]/(t^p)\to R$ is the same as an element $a$, the image of $t$, with $a^p=0$, and a homomorphism $k[t,t^{-1}]/(t^p-1)\to R$ is the same as a unit $u$ with $u^p=1$; hence $\alpha_p(R)=\{a\in R:a^p=0\}$ and $\mu_p(R)=\{u\in R^\times:u^p=1\}$. [F1, F2, F3, F5, F6, F7, algebra]

1.4 Length and nonreducedness. The ring $k[t]/(t^p)$ has $k$-basis $1,t,\dots,t^{p-1}$, so it is a finite $k$-algebra of dimension $p$ and $t\neq0$ is nilpotent; the substitution $t=1+s$ identifies $k[t,t^{-1}]/(t^p-1)\cong k[s]/(s^p)$ because $(1+s)^p-1=s^p$ in characteristic $p$ and $t=1+s$ is a unit of $k[s]/(s^p)$ with inverse $1-s+s^2-\dots+(-s)^{p-1}$; thus $\mu_p$ also has coordinate ring of length $p$ with nonzero nilpotent $s=t-1$. [F4, algebra]

2.1 Closed subgroup schemes. By step 1.3 the addition formula of step 1.1 restricts on the quotient to the addition of the subset $\alpha_p(R)\subseteq(R,+)$: it is closed under addition and negation because $(a+b)^p=a^p+b^p=0$ and $(-a)^p=-a^p=0$ in characteristic $p$, and it contains $0$; so $\alpha_p(R)$ is a subgroup of $(R,+)$ and the closed immersion $\alpha_p\hookrightarrow\mathbf G_a$ is a morphism of group schemes, making $\alpha_p$ a closed subgroup scheme of $\mathbf G_a$. Likewise the multiplication formula of step 1.2 restricts to the subset $\mu_p(R)\subseteq R^\times$, which is closed under multiplication and inversion and contains $1$, so $\mu_p$ is a closed subgroup scheme of $\mathbf G_m$. [F7, step 1.1, step 1.2, step 1.3, algebra]

3.1 Conclusion. Steps 1.1 and 1.2 produce $\mathbf G_a$ and $\mathbf G_m$ with their stated coordinate Hopf algebras, points and reducedness; step 1.3 produces the quotient Hopf algebra structures and the closed immersions defining $\alpha_p$ and $\mu_p$ together with their point descriptions; step 1.4 computes both coordinate rings as $k[s]/(s^p)$, giving length $p$ and nonreducedness; and step 2.1 identifies the induced group laws on the point sets, so that $\alpha_p$ and $\mu_p$ are closed subgroup schemes. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎ 