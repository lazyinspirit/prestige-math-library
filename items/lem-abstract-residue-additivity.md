---
id: lem-abstract-residue-additivity
kind: lemma
title: "Additivity of the abstract residue over intersecting subspaces"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-commensurable-subspaces-and-ideals-of-endomorphisms
  - lem-finite-potent-trace-linearity-and-conjugation
  - thm-abstract-residue-exists-unique
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the linear algebra suppliers.
Let $k$, $K$, $V$ and $A$ be as in [[thm-abstract-residue-exists-unique]], and
let $B$ be a further $k$-subspace of $V$ with $fB<B$ for every $f\in K$. Then
$A+B$ and $A\cap B$ are also stable in the sense that $f(A+B)<A+B$ and
$f(A\cap B)<A\cap B$ for all $f\in K$, and
$$\operatorname{res}_{A+B}+\operatorname{res}_{A\cap B} =\operatorname{res}_A+\operatorname{res}_B$$
as $k$-linear maps $\Omega^1_{K/k}\to k$. This is the additivity formula
$(R_5)$ that turns the local residue at a finite set of points into a sum of
local residues and drives the global residue theorem.

## Facts & Assumptions
**Given:** a field $k$, a commutative $k$-algebra $K$, a $K$-module $V$, a $k$-subspace $A\subseteq V$ with $fA<A$ for every $f\in K$ in the sense of [[def-commensurable-subspaces-and-ideals-of-endomorphisms]], a further $k$-subspace $B\subseteq V$ with $fB<B$ for every $f\in K$, and the abstract residues $\operatorname{res}_A$, $\operatorname{res}_B$, $\operatorname{res}_{A+B}$, $\operatorname{res}_{A\cap B}$ of [[thm-abstract-residue-exists-unique]] attached to the stable subspaces.

[F1] The commensurability relation $<$ of [[def-commensurable-subspaces-and-ideals-of-endomorphisms]] is reflexive, is monotone in the second variable, satisfies $A<A+B$, is transitive, is compatible with $k$-linear maps, and satisfies the finite-sums rule: if $A_i<B_i$ for $i=1,\dots,r$ then $\sum_iA_i<\sum_iB_i$. In particular $A+B$ and $A\cap B$ are stable when $A$ and $B$ are, and each of the four spaces $A$, $B$, $A+B$, $A\cap B$ satisfies the hypothesis of [[thm-abstract-residue-exists-unique]]. Moreover for a stable subspace $C$ the spaces $E(C),E_1(C),E_2(C),E_0(C)$ of [[def-commensurable-subspaces-and-ideals-of-endomorphisms]] are defined, an element of $E_0(C)$ is finite potent, and $E_0(C)$ is a finite potent $k$-subspace of $\operatorname{End}_k(V)$: products of two elements of $E_0(C)$ have finite-dimensional image, since $\theta_1\theta_2V\subseteq\theta_1(C+W)\subseteq\theta_1C+\theta_1W$ is finite-dimensional. This does not assert that sums of arbitrary finite-potent subspaces are finite potent; steps 3.1 and 4.1 construct the common finite-potent subspaces needed for the two trace comparisons separately.

[F2] The abstract residue of [[thm-abstract-residue-exists-unique]] is the unique $k$-linear map $\operatorname{res}_C\colon\Omega^1_{K/k}\to k$ on the stable subspace $C$ with $$\operatorname{res}_C(f\,\mathrm dg)=\operatorname{Tr}_V([f_1,g_1])$$ for all $f,g\in K$ and all endomorphisms $f_1,g_1\in E(C)$ with $f_1\equiv f\pmod{E_2(C)}$, $g_1\equiv g\pmod{E_2(C)}$ and $f_1\in E_1(C)$ or $g_1\in E_1(C)$; for such a choice the commutator lies in $E_0(C)$, so its finite-potent trace is defined, and the value is independent of the lifts. Elements $f,g$ of the commutative algebra $K$ commute as endomorphisms of $V$, so $[f,g]=0$.

[F3] Finite-potent traces: on a finite potent $k$-subspace $F\subseteq\operatorname{End}_k(V)$, the trace $\operatorname{Tr}_V$ is $k$-linear, so $\operatorname{Tr}_V(\theta_1-\theta_2) =\operatorname{Tr}_V(\theta_1)-\operatorname{Tr}_V(\theta_2)$ for $\theta_1,\theta_2\in F$ ([[lem-finite-potent-trace-linearity-and-conjugation]]).

[F4] The Axiom of Choice is [[def-axiom-of-choice]].



## Proof

**Proof technique:** direct; realize the four residues by four projections related by a linear identity and compare the finite-potent traces of the resulting commutators.

1.1 (Stability of $A+B$.) For $f\in K$ one has $fA<A$ and $fB<B$, hence $f(A+B)=fA+fB<A+B$ by the finite-sums rule of [F1]; therefore $A+B$ satisfies the hypothesis of [[thm-abstract-residue-exists-unique]] and $\operatorname{res}_{A+B}$ is defined. [F1, F2, given]

1.2 (Stability of $A\cap B$.) Let $f\in K$, choose finite-dimensional $W_1,W_2\subseteq V$ with $fA\subseteq A+W_1$ and $fB\subseteq B+W_2$, and set $W:=W_1+W_2$. For $x\in fA\cap fB$, write $x=a+w_1=b+w_2$ with $a\in A$, $b\in B$, and $w_i\in W_i$. Then $a=b+(w_2-w_1)\in U:=A\cap(B+W)$. The map $U/(A\cap B)\to(B+W)/B$ sending $u+(A\cap B)$ to $u+B$ is injective, and $(B+W)/B$ is finite-dimensional because it is a quotient of $W$. Hence $U/(A\cap B)$ is finite-dimensional; choose a finite-dimensional subspace $X\subseteq U$ whose image spans that quotient, so $U\subseteq(A\cap B)+X$. It follows that $x=a+w_1\in(A\cap B)+X+W_1$, a finite-dimensional enlargement. Thus $fA\cap fB<A\cap B$, and since $f(A\cap B)\subseteq fA\cap fB$, also $f(A\cap B)<A\cap B$. Therefore $A\cap B$ is stable and $\operatorname{res}_{A\cap B}$ is defined. [F1, F2, given, algebra]

1.3 (Four compatible projections.) Choose a complement $X$ of $A\cap B$ in $A$, a complement $Y$ of $A\cap B$ in $B$, and a complement $Z$ of $A+B$ in $V$, so that $V=(A\cap B)\oplus X\oplus Y\oplus Z$ with $A=(A\cap B)\oplus X$ and $B=(A\cap B)\oplus Y$; let $\pi_{A\cap B},\pi_X,\pi_Y,\pi_Z$ be the projections onto the four summands along the complementary summand, and put $\pi_A=\pi_{A\cap B}+\pi_X$, $\pi_B=\pi_{A\cap B}+\pi_Y$ and $\pi_{A+B}=\pi_{A\cap B}+\pi_X+\pi_Y$. Each is a $k$-linear projection of $V$ onto $A$, $B$, $A+B$, $A\cap B$ respectively, and adding the expressions for $\pi_A$ and $\pi_B$ gives the identity $\pi_A+\pi_B=\pi_{A+B}+\pi_{A\cap B}$. [F4, given, construct]

2.1 (Residues via the projections.) Fix the stable subspace $C\in\{A,B,A+B,A\cap B\}$ with projection $\pi_C$ of step 1.3. Since $\pi_Cf$ has image in $C$, it lies in $E_1(C)$; and for $c\in C$ one has $fc\in fC<C$, say $fc=c'+w$ with $c'\in C$ and $w$ in a fixed finite-dimensional space, whence $(\pi_Cf-f)(c)=\pi_C(w)-w$ lies in the finite-dimensional space $\pi_C(W)+W$, so $\pi_Cf\equiv f\pmod{E_2(C)}$. Therefore [F2] applies with $f_1=\pi_Cf$ and $g_1=g$ and gives $\operatorname{res}_C(f\,\mathrm dg)=\operatorname{Tr}_V([\pi_Cf,g])$ for all $f,g\in K$; denote $\gamma_C:=[\pi_Cf,g]\in E_0(C)$. [F1, F2, step 1.3]

3.1 (Finite-potent subspaces for the two differences.) Put $S:=A+B$ and $D:=A\cap B$. For the nested pair $A\subseteq S$, let $F_{A,S}:=\operatorname{span}_k\{\gamma_A,\gamma_S\}$. The image bound $\gamma_C(V)\subseteq C+gC$ and $gC<C$ gives $\gamma_A(V),\gamma_S(V)\subseteq S+W_0$ for a common finite-dimensional $W_0$. The compatible projections of step 1.3 satisfy $\pi_A(S)\subseteq A$; using $fS<S$, $gS<S$ and $gA<A$ in the formula $\gamma_A=[\pi_Af,g]$ gives $\gamma_A(S)\subseteq A+W_1$ for some finite-dimensional $W_1$, while $\gamma_S(S)$ is finite-dimensional because $\gamma_S\in E_0(S)$. Also $\gamma_A(A)$ is finite-dimensional because $\gamma_A\in E_0(A)$. Taking common finite-dimensional error spaces for the two generators and their images, every product of three elements of $F_{A,S}$ maps $V$ into a fixed finite-dimensional space: successively its image lies in $S+W_0$, then in $A$ plus a finite-dimensional space, then in a finite-dimensional space. Thus $F_{A,S}$ is finite potent. [F1, F3, step 2.1]

4.1 (The key identity and the second finite-potent subspace.) With $\gamma_C$ as in step 2.1 and using that $f$ and $g$ commute as endomorphisms of $V$, bilinearity of the commutator gives $\gamma_A-\gamma_{A+B}=[(\pi_A-\pi_{A+B})f,g]$ and $\gamma_{A\cap B}-\gamma_B=[(\pi_{A\cap B}-\pi_B)f,g]$, and the projection identity of step 1.3 gives $\pi_A-\pi_{A+B}=\pi_{A\cap B}-\pi_B$; hence $\gamma_A-\gamma_{A+B}=\gamma_{A\cap B}-\gamma_B$ as $k$-endomorphisms of $V$. To obtain trace linearity for the second difference, put $S:=A+B$ and $D:=A\cap B$, and for $D\subseteq B\subseteq S$ let $F_{D,B}:=\operatorname{span}_k\{\gamma_D,\gamma_B\}$. Both generators map $V$ into $S$ plus a finite-dimensional space; compatibility gives $\pi_B(S)\subseteq B$, hence $\gamma_B(S)\subseteq B$ plus a finite-dimensional space, and $\gamma_D(S)\subseteq D$ plus a finite-dimensional space from its image bound. Further, $\gamma_B(B)$ and $\gamma_D(D)$ are finite-dimensional because $\gamma_B\in E_0(B)$ and $\gamma_D\in E_0(D)$, while $\gamma_D(B)\subseteq D$ plus a finite-dimensional space from the same image bound. With common finite-dimensional error spaces for the two generators and their images, every product of four elements of $F_{D,B}$ maps $V$ into a fixed finite-dimensional space, so $F_{D,B}$ is finite potent. Thus [F3] gives trace linearity on $F_{D,B}$, and step 3.1 gives trace linearity on $F_{A,S}$; consequently $\operatorname{Tr}_V(\gamma_A)-\operatorname{Tr}_V(\gamma_S)=\operatorname{Tr}_V(\gamma_A-\gamma_S)$ and $\operatorname{Tr}_V(\gamma_D)-\operatorname{Tr}_V(\gamma_B)=\operatorname{Tr}_V(\gamma_D-\gamma_B)$. [F1, F2, F3, step 1.3, step 2.1, step 3.1, algebra]

5.1 (Additivity on generators.) Step 4.1 gives the operator identity and the trace-linear formula for the second difference; step 3.1 supplies the trace-linear formula for the first difference. Therefore the two trace differences agree. By step 2.1, these traces are the four abstract residues on $f\,\mathrm dg$; hence $\operatorname{res}_A(f\,\mathrm dg)-\operatorname{res}_{A+B}(f\,\mathrm dg)=\operatorname{res}_{A\cap B}(f\,\mathrm dg)-\operatorname{res}_B(f\,\mathrm dg)$ for all $f,g\in K$. Since the forms $f\,\mathrm dg$ generate $\Omega^1_{K/k}$ and both sums of residues are $k$-linear, this proves $\operatorname{res}_A+\operatorname{res}_B=\operatorname{res}_{A+B}+\operatorname{res}_{A\cap B}$, the formula $(R_5)$. The choices of complements in step 1.3 are the only use of the Axiom of Choice [F4]. [F1, F2, F3, step 2.1, step 3.1, step 4.1] ∎
