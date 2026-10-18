---
id: def-hh-affine-hecke-algebra-from-root-datum
kind: definition
title: "The Iwahori–Matsumoto affine Hecke algebra of a based root datum"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [ def-abstract-root-datum-and-its-weyl-group, lem-root-datum-combinatorics, def-hh-universal-coxeter-hecke-parameters-and-presentation ]
justified_by: [ lem-hh-root-datum-affine-geometry-and-wall-parameters ]
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Maarten Solleveld, Affine Hecke Algebras and Their Representations"
      url: "https://arxiv.org/pdf/2009.03007"
      locator: "§§1.2–1.4, PDF pp. 8–12: based root data, affine Coxeter groups, positive parameter systems, and Iwahori–Matsumoto normalization."
    - title: "Dan Ciubotaru, Tutorial on Affine Hecke Algebras"
      url: "https://imsarchives.nus.edu.sg/oldwww/Programs/016theory/files/dan.pdf"
      locator: "§1, Definition 1.2, PDF p. 1; §3, PDF pp. 4–5: generic affine Hecke parameters and the Iwahori–Matsumoto presentation."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $R=(X,\Phi,Y,\Phi^\vee,\Delta)$ be a reduced based root datum: $X,Y$ are finite-rank free lattices in perfect integral duality, $\Phi\subset X$ is the finite root set, $\Phi^\vee\subset Y$ its coroot set, $\Delta$ a base, and $W_0$ the finite Weyl group ([[def-abstract-root-datum-and-its-weyl-group]]). Its finite simple-reflection set is $S_0:=\{s_\alpha:\alpha\in\Delta\}\subset W_0$; the simple reflections in a chosen base generate $W_0$ ([[lem-root-datum-combinatorics]]). Write $Q^\vee=\mathbb Z\Phi^\vee\subseteq Y$ for the coroot lattice.

Put $V=Y\otimes_\mathbb Z\mathbb R$. The **canonical affine walls** are $H_{\alpha,j}=\{v:\langle\alpha,v\rangle=j\}$, with reflection $r_{\alpha,j}(v)=v-(\langle\alpha,v\rangle-j)\alpha^\vee$. The base alcove $A$ is the unique alcove in the positive chamber with $0$ in its closure; equivalently $A$ is defined by $0<\langle\alpha,v\rangle<1$ for every positive root $\alpha$. If there are no roots, put $A=V$. For a nonsemisimple root datum the alcoves include the whole common root kernel as a factor. Define $W_{\mathrm{aff}}=Q^\vee\rtimes W_0$, let $S_{\mathrm{aff}}$ be its reflections in the walls of $A$, put $W_{\mathrm e}=Y\rtimes W_0$, and let $\Omega=\operatorname{Stab}_{W_{\mathrm e}}(A)$. The canonical affine Coxeter system and the decomposition $W_{\mathrm e}=W_{\mathrm{aff}}\rtimes\Omega$, including central lattice directions, are proved in [[lem-hh-root-datum-affine-geometry-and-wall-parameters]]. In particular $S_0\subset S_{\mathrm{aff}}$ with the finite Weyl product orders. Define length on $W_{\mathrm e}$ as the number of walls separating $A$ from its translate; on $W_{\mathrm{aff}}$ it is Coxeter length, and its zero set is $\Omega$. Thus no arbitrary nongeometric affine Coxeter extension is silently compared with the lattice below.

Choose a parameter function $q:S_{\mathrm{aff}}\to\mathbb R_{>0}$ such that $q_s=q_t$ whenever $s,t\in S_{\mathrm{aff}}$ are conjugate as elements of $W_{\mathrm e}$. This condition compares only elements in the domain of $q$; conjugation by all of $W_{\mathrm e}$ need not preserve $S_{\mathrm{aff}}$. In particular, every $\omega\in\Omega$ preserves $S_{\mathrm{aff}}$ and satisfies $q_{\omega s\omega^{-1}}=q_s$, so its action preserves the quadratic relations. For $s,t\in S_{\mathrm{aff}}$ with finite Coxeter label $m(s,t)$, impose the alternating braid relation with $m(s,t)$ factors. Define $\mathcal H_{\mathrm{aff}}(R,q)$ to be the quotient of the free associative $\mathbb C$-algebra on $(T_s)_{s\in S_{\mathrm{aff}}}$ by those braid relations and

$$
(T_s-q_s)(T_s+1)=0\qquad(s\in S_{\mathrm{aff}}).
$$

The extended **Iwahori–Matsumoto affine Hecke algebra** is the crossed product $\mathcal H_{\mathrm{IM}}(R,q):=\mathcal H_{\mathrm{aff}}(R,q)\rtimes\Omega$. Its underlying vector space is $\mathcal H_{\mathrm{aff}}(R,q)\otimes_\mathbb C\mathbb C[\Omega]$, with multiplication $(hU_\omega)(h'U_\eta)=h\,\omega(h')U_{\omega\eta}$. Thus it adjoins symbols $U_\omega$ with $U_\omega U_\eta=U_{\omega\eta}$ and $U_\omega T_sU_\omega^{-1}=T_{\omega s\omega^{-1}}$. The stated parameter condition makes each $\Omega$-conjugation an algebra automorphism. If $v_s=\sqrt{q_s}>0$ and $N_s=q_s^{-1/2}T_s$, then $(N_s-v_s)(N_s+v_s^{-1})=0$, the symmetric normalization in [[def-hh-universal-coxeter-hecke-parameters-and-presentation]].

This definition asserts neither an Iwahori–Matsumoto basis nor an equivalence with a Bernstein presentation. It does not identify an arbitrary reductive $p$-adic group's Iwahori-fixed category with modules over this algebra; that requires a separate group-specific equivalence.
