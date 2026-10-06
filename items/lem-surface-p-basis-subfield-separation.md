---
id: lem-surface-p-basis-subfield-separation
kind: lemma
title: "Surface p basis subfield separation"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [
          def-axiom-of-choice, def-dependent-choice, def-derivation-algebra,
                    def-kahler-differentials-algebra, def-linear-basis]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, More on Algebra, Lemmas 47.2–47.5 (p-bases, subfield intersections, and the power-series-ring application)"
      url: "https://stacks.math.columbia.edu/download/more-algebra.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let $k$ have characteristic $p>0$, $A=k[\![X_1,\ldots,X_n]\!][Y_1,\ldots,Y_m]$ and $K=\operatorname{Frac}A$. Choose a possibly infinite $p$-basis $(b_i)_{i\in I}$ of $k/k^p$, meaning its restricted monomials of finite support form a $k^p$-basis. For finite $J\subset I$ put $k_J=k^p(b_i:i\notin J)$, $A_J=k_J[\![X_1^p,\ldots,X_n^p]\!][Y_1^p,\ldots,Y_m^p]$ and $K_J=\operatorname{Frac}A_J$. Then $A$ is finite free over $A_J$, the family $(K_J)$ is downward directed with intersection $K^p$, and for every finite field extension $L/K$, $\bigcap_J L^pK_J=L^p$.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, the ring $A=k[\![X_1,\dots,X_n]\!][Y_1,\dots,Y_m]$ with fraction field $K$, and a $p$-basis $(b_i)_{i\in I}$ of $k/k^p$ whose restricted monomials of finite support form a $k^p$-basis of $k$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-derivation-algebra.* Let $A\xrightarrow{\varphi}B$ be a homomorphism of commutative rings (def-commutative-ring), so that $B$ is an $A$-algebra, and let $M$ be a $B$-module (def-left-and-right-modules). ([[def-derivation-algebra]])

[F4] *def-kahler-differentials-algebra.* Let $A\xrightarrow{\varphi}B$ be a homomorphism of commutative rings and let $\operatorname{Der}_A(B,-)$ be the derivation functor of [[def-derivation-algebra]]. ([[def-kahler-differentials-algebra]])

[F5] *def-linear-basis.* Let $V$ be a vector space over a field $F$ (def-vector-space). A subset $B \subseteq V$ is a **basis of $V$** when - **(B1)** $B$ is linearly independent (def-linear-independence), and - **(B2)** $B$ spans $V$, that is $\operatorname{span}(B) = V$ (def-linear-combination-and-span, which is where the words *spans* and *spanning set* are fixed; they are not redefined  ([[def-linear-basis]])

## Proof

1.1 For a finite $J\subset I$ write $k_J=k^p(b_i:i\notin J)$; the $p$-monomials in the variables $b_i$, $i\in J$, form a $k_J$-basis of $k$ by the defining property of a $p$-basis and the finite-support condition. Consequently the products of these monomials with the $X$- and $Y$-monomials of exponents less than $p$ form an explicit $A_J$-basis of $A=k[\![X]\!][Y]$, because $A$ is a finite free module over $k[\![X^p]\!][Y^p]$ with the monomials of exponents less than $p$ as a basis; so $A$ is finite free over $A_J=k_J[\![X^p]\!][Y^p]$. [F5, given]

2.1 The family $(K_J)$ over finite $J$ is downward directed by inclusion of the finite sets, with union the whole index set corresponding to increasing $J$; only the downward directed structure and its cofinal refinements are used below. [F2, step 1.1]

3.1 The intersection of the fields $K_J$ is $K^p$. The inclusion $K^p\subseteq\bigcap_JK_J$ is immediate. For the reverse inclusion, fix $x\in\bigcap_JK_J$ and write $x=f/g^p$ with $f,g\in A$, $g\ne0$ (replace a denominator $g_0$ by $g_0^p$). For each finite $J$, separately write $x=a_J/c_J$ with $a_J,c_J\in A_J$, $c_J\ne0$. Then $x=(a_Jc_J^{p-1})/c_J^p$; putting $a'_J=a_Jc_J^{p-1}\in A_J$ gives $c_J^pf=a'_Jg^p\in A_J$, since $g^p\in A^p\subseteq A_J$. The denominator $c_J$ may depend on $J$. Every coordinate derivation $\partial/\partial X_i$ or $\partial/\partial Y_j$ kills $A_J$, as does each coefficient derivation $\delta_i$ dual to $b_i$ for $i\in J$. Applying any such derivation $D$ to $c_J^pf=a'_Jg^p$ yields $c_J^pD(f)=0$, so $D(f)=0$. For each coordinate derivation choose any $J$; for each $\delta_i$ choose $J$ containing $i$. Thus all coordinate derivatives of $f$ vanish, so only monomials with every $X,Y$ exponent divisible by $p$ occur. Also every coefficient of $f$ is killed by every $\delta_i$; expanding that coefficient in the finite-support $p$-monomial $k^p$-basis shows it lies in $k^p$. Hence $f\in k^p[\![X_1^p,\ldots,X_n^p]\!][Y_1^p,\ldots,Y_m^p]=A^p$, and $x=f/g^p\in K^p$. [F3, F4, given, step 1.1, step 2.1]

4.1 For every finite field extension $L/K$, $\bigcap_JL^pK_J=L^p$. We prove the more general assertion by induction on $[E:F]$: if $F$ has characteristic $p$ and $(F_\alpha)$ is a downward-directed family of purely inseparable subfields of an extension field containing $F^p$, with $\bigcap_\alpha F_\alpha=F^p$, then $\bigcap_\alpha E^pF_\alpha=E^p$ for every finite extension $E/F$. Steps 2.1 and 3.1 give these hypotheses for $F=K$ and $F_\alpha=K_J$. The base case $E=F$ is the intersection hypothesis. If $F\subsetneq M\subsetneq E$, induction gives $\bigcap_\alpha M^pF_\alpha=M^p$. The family $M_\alpha=M^pF_\alpha$ is downward directed, purely inseparable over $M^p$, and has intersection $M^p$; also $E^pM_\alpha=E^pF_\alpha$. Applying induction to $E/M$ proves the claim. It remains to consider an extension with no proper intermediate field. Such an extension is simple; it is either separable or purely inseparable of degree $p$. In the separable case write $E=F(\theta)$ and let $d=[E:F]$. Then $E^p=F^p(\theta^p)$ is separable of degree $d$ over $F^p$. It is linearly disjoint from each purely inseparable $F_\alpha/F^p$, so $1,\theta^p,\ldots,(\theta^p)^{d-1}$ remains a basis of $E^pF_\alpha/F_\alpha$. If $z$ belongs to every $E^pF_\alpha$, its unique coordinates in this basis lie in every $F_\alpha$, hence in $F^p$; thus $z\in E^p$. In the purely inseparable case write $E=F(\theta)$ with $\theta^p=t\in F\setminus F^p$. Then $E^p=F^p(t)$. Since $t\notin\bigcap_\alpha F_\alpha$, choose $\alpha_0$ with $t\notin F_{\alpha_0}$ and restrict to the cofinal family $F_\alpha\subseteq F_{\alpha_0}$. For these indices, $t^p\in F^p\subseteq F_\alpha$ but $t\notin F_\alpha$, so $1,t,\ldots,t^{p-1}$ is a basis of $E^pF_\alpha/F_\alpha$. The same unique-coordinate argument puts every element of the intersection in $E^p$. [F2, F5, step 2.1, step 3.1]

5.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the Zorn and derivation suppliers; the only quoted input for the family $(K_J)$ is the cofinal subfamily of steps 2.1 and 4.1. [F1, F2, step 2.1, step 4.1] ∎

## Remarks

- The explicit finite $A_J$-basis in step 1.1 gives finite freeness. In step 3.1 the denominator $c_J$ is local to each field $K_J$; no common denominator is chosen. The extension argument in step 4.1 uses a cofinal refinement only in the purely inseparable degree-$p$ case.
- Maximality of the p-independent family is supplied by Zorn in the standing construction of the p-basis; the lemma itself takes the family as given.
