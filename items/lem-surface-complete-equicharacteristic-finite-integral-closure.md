---
id: lem-surface-complete-equicharacteristic-finite-integral-closure
kind: lemma
title: "Surface complete equicharacteristic finite integral closure"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps: [
          cor-complete-local-domain-finite-over-a-regular-power-series-ring,
                    cor-localisations-of-regular-local-rings-are-regular,
                    cor-serre-normality-criterion-two-directions, def-axiom-of-choice, def-dependent-choice,
                    lem-surface-non-pth-power-detected-by-derivation,
                    lem-trace-pairing-for-a-finite-separable-extension,
                    thm-regular-local-rings-are-domains-and-cohen-macaulay]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project: full proof imports for normal-surface resolution, lemma-Noetherian-normal-domain-insep-extension, lemma-Noetherian-normal-domain-finite-separable-extension, lemma-domain-char-p-N-1-2"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. The integral closure of a complete equicharacteristic Noetherian local domain in every finite extension of its fraction field is a finite module.

## Facts & Assumptions

**Given:** A complete equicharacteristic Noetherian local domain $A$ with fraction field $K$, and a finite field extension $L/K$.

[F1] *cor-complete-local-domain-finite-over-a-regular-power-series-ring.* Assume the Axiom of Choice. Let $(A,\mathfrak m)$ be a complete equicharacteristic Noetherian local domain of dimension $d$. Then there exists a coefficient field $k \subseteq A$ and an injective local homomorphism $k\llbracket X_1,\ldots,X_d\rrbracket \hookrightarrow A$ whose image is a regular complete local subring over which $A$ is module-finite. ([[cor-complete-local-domain-finite-over-a-regular-power-series-ring]])

[F2] *cor-localisations-of-regular-local-rings-are-regular.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every prime localization $R_{\mathfrak p}$ of a regular local ring $R$ is regular, and $\operatorname{edim}R_{\mathfrak p}=\operatorname{ht}\mathfrak p$. ([[cor-localisations-of-regular-local-rings-are-regular]])

[F3] *cor-serre-normality-criterion-two-directions.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A commutative Noetherian domain is normal if and only if it satisfies $(R_1)$ and $(S_2)$. Equivalently its integral closedness is characterized by these two conditions. ([[cor-serre-normality-criterion-two-directions]])

[F4] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F5] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F6] *lem-surface-non-pth-power-detected-by-derivation.* Assume AC. Let $B$ be a domain of characteristic $p>0$ finite type over a complete equicharacteristic Noetherian local ring, and let $f\in B$ not be a $p$th power in $\operatorname{Frac}B$. There is a derivation $D:B\to B$ with $D(f)\ne0$. ([[lem-surface-non-pth-power-detected-by-derivation]])

[F7] *lem-trace-pairing-for-a-finite-separable-extension.* Let $L/F$ be a finite separable field extension. Then the bilinear pairing $L\times L\to F$, $(x,y)\mapsto\operatorname{Tr}_{L/F}(xy)$, is nondegenerate. ([[lem-trace-pairing-for-a-finite-separable-extension]])

[F8] *thm-regular-local-rings-are-domains-and-cohen-macaulay.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$. ([[thm-regular-local-rings-are-domains-and-cohen-macaulay]])

## Proof

1.1 Choose a finite regular power-series subring $R$ over which $A$ is finite; $R$ is regular and Cohen--Macaulay, and the Serre criterion makes it normal because it and all its prime localizations are regular and Cohen--Macaulay. [F1, F2, F3, F8, given]

2.1 For a finite separable extension of $\operatorname{Frac}(R)$, choose an integral power basis and use the nondegenerate trace pairing: traces of products of integral elements are integral and lie in the fraction field of $R$, hence in the normal ring $R$, and inverting one discriminant places every integral element inside a single finite $R$-module. [F7, F8, step 1.1]

3.1 In characteristic $p$, pass to a finite normal envelope and its maximal purely inseparable subextension. At a degree-$p$ step, let $B$ be the preceding normal finite Noetherian $R$-algebra and let $L=\operatorname{Frac}(B)[z]/(z^p-b)$ with $b\in B$ not a $p$th power; the detecting-derivation lemma gives $D\colon B\to B$ with $D(b)\ne0$. [F6, step 1.1, step 2.1]

4.1 Put $c=D(b)\ne0$. Induct on $i<p$ to show that an integral $u=\sum_{j=0}^i a_jz^j$ has $c^ia_j\in B$ for every $j$. For $i=0$ this is normality of $B$. For $i>0$, normality gives $u^p\in B$, and $v=\sum_{j=1}^i jc a_jz^{j-1}$ satisfies $v^p=c^{p-1}D(u^p)\in B$, so $v$ is integral. The induction hypothesis gives $jc^ia_j\in B$ for $1\le j\le i$; these $j$ are units in characteristic $p$. Subtracting those integral terms from $c^iu$ makes $c^ia_0$ integral and in $\operatorname{Frac}B$, hence in $B$. Taking $i=p-1$ places every integral element in the finite $B$-module $\sum_{j<p}Bc^{-(p-1)}z^j$; its integral closure is a submodule and is finite because $B$ is Noetherian. [F6, F8, step 3.1, algebra]

5.1 Separable trace finiteness applied to the normal envelope, together with the degree-$p$ induction, shows that the integral closure in $L$ is a finite $R$-module; the integral closure of the original domain in the intermediate field is a submodule of that finite closure, and transitivity of integrality identifies it with the closure of $R$, so it is finite as required. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F4, F5, F7, step 2.1, step 4.1] ∎

## Remarks

- The inseparable induction uses the pth-power derivative computation to bound integral elements by the module generated by the powers of z; no Tate or mixed characteristic input is needed.
- The separable case is handled by the discriminant of the trace pairing; the two cases together cover every finite extension.
