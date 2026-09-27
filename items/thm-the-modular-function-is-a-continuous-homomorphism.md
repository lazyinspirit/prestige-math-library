---
id: thm-the-modular-function-is-a-continuous-homomorphism
kind: theorem
title: "The modular function is a continuous homomorphism"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-modular-function-of-a-locally-compact-group, lem-right-translation-scales-left-haar-measure, lem-translations-preserve-compactly-supported-continuous-functions, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, def-left-haar-integral-and-left-haar-measure, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, thm-recursion, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan’s Property (T), Appendix A §§A.3–A.4"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A §§A.3–A.4, printed pp. 316–323"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§§5.2–5.3 and Lemma 5.5.2, printed pp. 212–230, 238–239"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Assume AC. The modular function $\Delta_G:G\to\mathbb R_{>0}$ of an LCH group
with fixed left Haar measure is a continuous group homomorphism; that is,
$\Delta_G(gh)=\Delta_G(g)\Delta_G(h)$ for all $g,h\in G$ and $\Delta_G$ is
continuous for the usual topology of $\mathbb R_{>0}$.

## Facts & Assumptions

**Given:** An LCH group $G$, a left Haar measure $\mu$ on $G$, the modular function $\Delta_G$ of [[def-modular-function-of-a-locally-compact-group]], and AC.

[F1] For every $g\in G$ the translate identity $\int_G F(xg)\,d\mu(x)=c(g)\int_G F\,d\mu(x)$ with $c(g)=\Delta_G(g^{-1})$ holds for $f\in C_c(G)$ and, in the Borel-level form, for every nonnegative Borel $F$ ([[lem-right-translation-scales-left-haar-measure]]).

[F2] $\Delta_G(g)=c(g^{-1})$ is defined by the unique positive scalar of [F1], and the definition is independent of the normalisation of $\mu$ ([[def-modular-function-of-a-locally-compact-group]]).

[F3] Translation preserves compact support and, at every $a_0\in G$, the maps $a\mapsto L_af$ and $a\mapsto R_af$ are continuous in uniform norm with all supports contained in a fixed compact set on a neighbourhood of $a_0$ ([[lem-translations-preserve-compactly-supported-continuous-functions]]).

[F4] A left Haar measure is nonzero, Radon, positive on nonempty open sets, and finite on compact sets; a nonzero nonnegative $C_c$ function has strictly positive integral ([[def-left-haar-integral-and-left-haar-measure]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F5] Assuming Dependent Choice, a compact set inside an open set admits $f\in C_c(X)$ with $\mathbf 1_K\le f\le\mathbf 1_U$ ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]]).

[F6] Recursion: given a set $A$, $a\in A$ and $f:A\to A$, there is $g:\mathbb N\to A$ with $g(0)=a$ and $g(n+1)=f(g(n))$ ([[thm-recursion]]).

[A1] AC is assumed in the choice-function form of the cited definition ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Discharge the choice hypothesis of [F5] from AC. Given a set $A$, a point $a\in A$ and a serial relation $R$ on $A$ (every $R[x]$ nonempty), [A1] chooses one member of each set in the family $\{R[x]:x\in A\}$, and composing this choice function with $x\mapsto R[x]$ gives $f:A\to A$ with $x\mathrel Rf(x)$. By [F6] the recursion $g(0)=a$, $g(n+1)=f(g(n))$ produces an infinite $R$-chain from $a$. So Dependent Choice is available. [A1, F6]

1.2 Multiplicativity. Fix $g,h\in G$ and a Borel set $E$ with $0<\mu(E)<\infty$, which exists by inner regularity and finiteness on compact sets in [F4]. Using the Borel-level identity of [F1] twice gives $\mu(E(gh)^{-1})=\mu(Eh^{-1}g^{-1})=c(g)\mu(Eh^{-1})=c(g)c(h)\mu(E)$, while the defining property of $c$ gives $\mu(E(gh)^{-1})=c(gh)\mu(E)$; the scalar $c(gh)-c(g)c(h)$ therefore annihilates the nonzero measure $\mu$, so $c(gh)=c(g)c(h)$, and replacing $g,h$ by their inverses and using $\Delta_G(x)=c(x^{-1})$ from [F2] gives $\Delta_G(gh)=\Delta_G(g)\Delta_G(h)$. [F1, F2, F4]

2.1 There is $f_0\in C_c(G)$ with $f_0\ge0$ and $\int_Gf_0\,d\mu>0$. Since $\mu$ is nonzero and outer regular on Borel sets by [F4], some open $U$ has $\mu(U)>0$; inner regularity of $\mu$ on the open set $U$ gives a compact $K\subseteq U$ with $\mu(K)>0$. By [F5], applied under the Dependent Choice just derived, choose $f_0\in C_c(G)$ with $\mathbf 1_K\le f_0\le\mathbf 1_U$; then $f_0\ge0$ and $\int f_0\,d\mu\ge\mu(K)>0$. [F4, F5, step 1.1]

3.1 Define $\varphi(a):=\int_G f_0(xa)\,d\mu(x)$ for $a\in G$ for the function $f_0$ of step 2.1. By [F1] applied to $f_0$ we have $\varphi(a)=c(a)\int f_0\,d\mu=\Delta_G(a^{-1})\varphi(e)$ for every $a$, and $\varphi(e)=\int f_0\,d\mu>0$ by step 2.1; hence $\Delta_G(a)=\varphi(a^{-1})/\varphi(e)$ for every $a$, so continuity of $\Delta_G$ will follow from continuity of $\varphi$ and of inversion. [F1, F2, step 2.1]

3.2 The function $\varphi$ is continuous. Fix $a_0\in G$. By [F3] there are a neighbourhood $N$ of $a_0$ and a compact $C\subseteq G$ with $\operatorname{supp}R_af_0\subseteq C$ for every $a\in N$ and with $\|R_af_0-R_{a_0}f_0\|_\infty\to0$ as $a\to a_0$; for $a\in N$ the difference $R_af_0-R_{a_0}f_0$ is supported in $C$, whence $|\varphi(a)-\varphi(a_0)|\le\|R_af_0-R_{a_0}f_0\|_\infty\,\mu(C)$ with $\mu(C)<\infty$ by [F4], so $\varphi(a)\to\varphi(a_0)$. [F3, F4, step 2.1]

4.1 $\Delta_G$ is continuous: by step 3.1 it is the composition of the continuous maps $a\mapsto a^{-1}$ (inversion in a topological group), the map $\varphi$ that is continuous by step 3.2, and division by the positive constant $\varphi(e)>0$. [step 3.1, step 3.2]

5.1 Finally $\Delta_G(e)=c(e)=1$, because $\mu(Ee^{-1})=\mu(E)$ forces $c(e)=1$ by the same uniqueness of the scalar as in [F1]; and $\Delta_G$ takes values in $\mathbb R_{>0}$ by definition. With the multiplicativity of step 1.2 this exhibits $\Delta_G$ as a continuous homomorphism from $G$ to the multiplicative group $\mathbb R_{>0}$. ∎ [F1, F2, step 1.2, step 4.1]
