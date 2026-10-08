---
id: lem-monomial-induced-representations-transversal-model-properties
kind: lemma
title: Matrix-coefficient properties of the transversal model of a monomial representation
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-axiom-of-choice
  - def-bounded-linear-operator
  - def-commensurator-unitary-character-and-monomial-induced-representation
  - def-hilbert-space
  - def-square-summable-family-on-an-arbitrary-index-set
  - thm-of-archimedean
dependency_level: 1
axiom_use: "AC is inherited from the preceding transversal definition, where it supplies a representative for each left coset when an arbitrary open subgroup is given. In this lemma the transversals are part of the data, and all five arguments are choice-free once they are fixed."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
axiom_audit: >-
  AC is stated as inherited from the transversal convention in the preceding
  definition: it supplies transversals for arbitrary open subgroups. Here the
  transversals are part of the data, and the proof makes no further choices.
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (author-hosted complete book draft, arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.F, Lemma 1.F.10 and its complete proof, printed pp. 53–54. The proof is checked and reproduced locally."
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part II §10.2.11, printed pp. 212–213, briefly mentions the open-subgroup group-C*-algebra embedding by induction and says the construction details are omitted; §§10.3.19–10.3.20, printed pp. 219–220, concern cocycle conjugacy of actions. Context only; neither passage proves the transversal-model lemma."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---
## Statement

Assume AC ([[def-axiom-of-choice]]). Let $G$ be a topological group. For
$i\in\{1,2\}$, let $H_i\le G$ be open, let $\chi_i:H_i\to\mathbb T$ be a
unitary character, and let $T_i$ be a right transversal for the left cosets
$H_i\backslash G$ with $e\in T_i$. Write the unique factorization
$tg=\alpha_i(t,g)(t\cdot_i g)$ from
[[def-commensurator-unitary-character-and-monomial-induced-representation]],
and let $\pi_i$ be its transversal representation on $\ell^2(T_i)$. A bounded
intertwiner is a bounded linear map
$S:\ell^2(T_1)\to\ell^2(T_2)$ ([[def-hilbert-space]],
[[def-bounded-linear-operator]]) satisfying
$S\pi_1(g)=\pi_2(g)S$ for every $g\in G$. Put $f:=S\delta_e\in\ell^2(T_2)$,
where $\delta_e$ is the distinguished basis vector. Then:

1. $f=0$ if and only if $S=0$.
2. If $\pi_1=\pi_2$ on the same Hilbert space, then $f$ is a scalar multiple
   of $\delta_e$ if and only if $S$ is a scalar operator.
3. For every $t\in T_2$ and $h\in H_1$,
   $\chi_2(\alpha_2(t,h))f(t\cdot_2h)=\chi_1(h)f(t)$.
4. If $t\in T_2$ has an infinite $H_1$-orbit under $t\cdot_2h$, then $f(t)=0$.
5. If $t\in T_2$ and $h\in H_1$ satisfy $f(t)\ne0$ and $t\cdot_2h=t$,
   then $tht^{-1}\in H_2$ and $\chi_1(h)=\chi_2(tht^{-1})$.

## Facts & Assumptions

**Given:** AC, the fixed transversal data $T_i$, their transversal representations $\pi_i$, and a bounded intertwiner $S$.

[F1] AC is inherited from the transversal convention of the preceding definition; the present lemma takes both transversals as data and uses no additional choice ([[def-axiom-of-choice]]).

[F2] The transversal action is $(\pi_i(g)u)(t)=\chi_i(\alpha_i(t,g))u(t\cdot_i g)$, $\pi_i(t^{-1})\delta_e=\delta_t$, and $\delta_e$ is cyclic ([[def-commensurator-unitary-character-and-monomial-induced-representation]]).

[F3] For any index set $I$ and $u\in\ell^2(I)$, $\|u\|_2^2=\sup_{F\subseteq I\text{ finite}}\sum_{s\in F}|u(s)|^2$; hence each finite subsum is at most $\|u\|_2^2$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F6] If $u\in\ell^2(I)$ and $\varepsilon>0$, there is a finite $F\subseteq I$ such that $\sum_{s\in I\setminus F}|u(s)|^2<\varepsilon$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F4] The real field is Archimedean, so for every real bound $b$ some natural number $n$ satisfies $b<n$ ([[thm-of-archimedean]]).

[F5] Each $\ell^2(T_i)$ is a Hilbert space and a bounded linear map between normed spaces is continuous ([[def-hilbert-space]], [[def-bounded-linear-operator]]).

## Proof

**Proof technique:** direct.

**Given:** AC, $G,H_i,\chi_i,T_i,\pi_i$, and $S$ as in the Statement.

1.1 For every $t\in T_1$, the transversal action gives $\pi_1(t^{-1})\delta_e=\delta_t$. To check density from [F3, F6], take $u\in\ell^2(T_1)$ and $\varepsilon>0$. Apply [F6] with tolerance $\varepsilon^2$ to obtain a finite $F\subseteq T_1$ with $\sum_{t\in T_1\setminus F}|u(t)|^2<\varepsilon^2$. The vector $u_F$ equal to $u$ on $F$ and $0$ elsewhere has finite support and $\|u-u_F\|_2^2=\sum_{t\in T_1\setminus F}|u(t)|^2<\varepsilon^2$ by the norm definition [F3], hence $\|u-u_F\|_2<\varepsilon$. Thus finite-support vectors are dense, and since each is a finite linear combination of the vectors $\delta_t=\pi_1(t^{-1})\delta_e$, $\delta_e$ is cyclic. AC is only the inherited transversal convention; the fixed $T_i$ are given. [F1, F2, F3, F6, given]

1.2 For $h\in H_1$, the transversal identities give $\alpha_1(e,h)=h$ and $e\cdot_1h=e$, while $s\cdot_1h\ne e$ for $s\in T_1\setminus\{e\}$. Therefore $\pi_1(h)\delta_e=\chi_1(h)\delta_e$. Intertwining now gives $\pi_2(h)f=S\pi_1(h)\delta_e=\chi_1(h)f$; evaluating at $t\in T_2$ with the formula in [F2] yields $\chi_2(\alpha_2(t,h))f(t\cdot_2h)=\chi_1(h)f(t)$. [F2, F5]

2.1 If $f=0$, then for every $g\in G$, $S\pi_1(g)\delta_e=\pi_2(g)S\delta_e=0$. By cyclicity from step 1.1, $S$ vanishes on a dense subspace; continuity from [F5] gives $S=0$. Conversely, $S=0$ immediately gives $f=0$. [F5, step 1.1]

2.2 Suppose $\pi_1=\pi_2$ on the common carrier and $f=\lambda\delta_e$. For every $g\in G$, $S\pi_1(g)\delta_e=\pi_1(g)S\delta_e=\lambda\pi_1(g)\delta_e$. Step 1.1 makes the orbit span dense, so continuity gives $S=\lambda I$. Conversely, if $S=\lambda I$, then $f=\lambda\delta_e$. [F5, step 1.1]

2.3 By step 1.2 and $|\chi_i|=1$, the modulus $|f|$ is constant on each $H_1$-orbit in $T_2$. If the orbit $O$ of $t$ is infinite and $c:=|f(t)|>0$, choose a natural number $n>\|f\|_2^2/c^2$ by [F4]. There are $n$ distinct points in $O$; their finite square sum is $n c^2$, contradicting the finite-subsum bound [F3]. Hence $f(t)=0$. [F2, F3, F4, step 1.2]

3.1 Suppose $f(t)\ne0$ and $t\cdot_2h=t$. Step 1.2 then gives $\chi_2(\alpha_2(t,h))=\chi_1(h)$. The factorization $th=\alpha_2(t,h)(t\cdot_2h)=\alpha_2(t,h)t$ implies $tht^{-1}=\alpha_2(t,h)\in H_2$, and therefore $\chi_1(h)=\chi_2(tht^{-1})$. [F2, step 1.2] ∎

## Source notes

Bekka–de la Harpe's Lemma 1.F.10, printed pp. 53–54, states exactly the five claims and gives a complete short proof. Each cyclicity, intertwining, coordinate, orbit, and stabilizer calculation is written out above. Blackadar's Part II §10 is only background: pp. 212–213 discuss group C*-algebra functoriality and mention induction while omitting its construction; pp. 219–220 discuss cocycle conjugacy of actions. Those passages do not prove this monomial-transversal lemma and are not used as proof substitutes.
