---
id: lem-abstract-residue-basic-properties
kind: lemma
title: "Basic properties of the abstract residue: restriction, commensurability, vanishing, logarithmic residues"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-commensurable-subspaces-and-ideals-of-endomorphisms
  - def-dimension
  - def-linear-map
  - def-trace-of-an-endomorphism
  - def-vector-space
  - lem-e-ideals-and-commutator-trace
  - lem-finite-potent-trace-existence-and-uniqueness
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
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the linear algebra suppliers
([[def-axiom-of-choice]]). Let $k$ be a field, $K$ a commutative $k$-algebra
([[def-linear-map]]), $V$ a $K$-module and $A\subseteq V$ a $k$-subspace with
$fA<A$ for every $f\in K$ in the sense of
[[def-commensurable-subspaces-and-ideals-of-endomorphisms]], so that the
abstract residue $\operatorname{res}_V$ of
[[thm-abstract-residue-exists-unique]] is defined.

**(1) (Restriction and commensurability.)** If $A\subseteq V'\subseteq V$ is a
$k$-subspace with $KV'\subseteq V'$, then $\operatorname{res}_V=\operatorname{res}_{V'}$
as $k$-linear maps on $\Omega^1_{K/k}$; if $A'\sim A$ is a further $k$-subspace
of $V$ with $fA'<A'$ for all $f\in K$, then
$\operatorname{res}_{A'}=\operatorname{res}_A$; and if $V/A$ is
finite-dimensional then $\operatorname{res}_V=0$.

**(2) (Continuity.)** If
$$fA+fgA+fg^2A\subseteq A,$$
then $\operatorname{res}_V(f\,\mathrm dg)=0$. In particular, this holds when
$fA\subseteq A$ and $gA\subseteq A$ — equivalently, when
$fA+gA+fgA\subseteq A$. Thus $\operatorname{res}_V$ is identically zero when
$A$ is a $K$-submodule of $V$.

**(3) (Logarithmic and power residues.)** $\operatorname{res}_V(f^n\,\mathrm df)=0$
for every $f\in K$ and every integer $n\ge0$, and also for every integer
$n\le-2$ when $f$ is invertible in $K$; in particular
$\operatorname{res}_V(\mathrm df)=0$ for every $f\in K$.

**(4) (Logarithmic residues along a unit.)** Let $g\in K^\times$ and let
$h\in K$ with $hA\subseteq A$. Then $hgA=ghA\subseteq gA$, so multiplication
by $h$ induces $k$-linear
endomorphisms $m_h$ of the finite-dimensional spaces $A/(A\cap gA)$ and
$gA/(A\cap gA)$ ([[def-dimension]], [[def-trace-of-an-endomorphism]]), and
$$\operatorname{res}_V(hg^{-1}\,\mathrm dg)=\operatorname{Tr}_{A/(A\cap gA)}(m_h)-\operatorname{Tr}_{gA/(A\cap gA)}(m_h).$$
In particular, if $gA\subseteq A$ then $A\cap gA=gA$ and taking $h=1$ gives
$\operatorname{res}_V(g^{-1}\mathrm dg)=\dim_k(A/gA)$.

## Facts & Assumptions

**Given:** a field $k$, a commutative $k$-algebra $K$, a $K$-module $V$, a $k$-subspace $A\subseteq V$ with $fA<A$ for all $f\in K$, the resulting subspaces $E,E_1,E_2,E_0\subseteq\operatorname{End}_k(V)$ and the abstract residue $\operatorname{res}_V\colon\Omega^1_{K/k}\to k$; whenever a $k$-subspace $V'$ or $A'$ with the properties of the statement is invoked it is understood to satisfy those hypotheses.

[F1] $V$ is a $k$-vector space, $K$ acts on $V$ through a $k$-algebra homomorphism $K\to\operatorname{End}_k(V)$, so $K$-multiplication is additive and $k$-homogeneous in each variable, any two elements of $K$ commute, and composition of endomorphisms is associative, with the identity of $K$ acting as $\mathrm{id}_V$. ([[def-vector-space]], [[def-linear-map]])

[F2] Assume the Axiom of Choice. Every $k$-subspace $B$ of a $k$-vector space $W$ has a $k$-linear complement, since a basis of $B$ extends to a basis of $W$; consequently the quotient map $q\colon W\to W/B$ admits a $k$-linear section, namely the map sending a class to its component in a chosen complement of $B$. In particular $A$ has a complement in $V$, and the corresponding projection $\pi\colon V\to A$ satisfies $\pi(a)=a$ for all $a\in A$. ([[def-axiom-of-choice]])

[F3] $A<B$ means that $(A+B)/B$ is finite-dimensional, and this holds if and only if $A\subseteq B+W$ for some finite-dimensional $W\subseteq V$; $A\sim B$ means $A<B$ and $B<A$; the relation $<$ is reflexive, transitive, stable under $k$-linear maps and finite sums; if $A'\sim A$ is a $k$-subspace of $V$ with $fA'<A'$ for all $f\in K$, then $E(A')=E(A)$, $E_1(A')=E_1(A)$, $E_2(A')=E_2(A)$ and $E_0(A')=E_0(A)$. ([[def-commensurable-subspaces-and-ideals-of-endomorphisms]])

[F4] $E$ is a $k$-subalgebra of $\operatorname{End}_k(V)$ containing the image of $K$, the spaces $E_1,E_2$ are two-sided ideals of $E$, $E_1+E_2=E$, $E_1\cap E_2=E_0$, the space $E_0$ is finite potent, $\operatorname{Tr}_V$ is defined and $k$-linear on $E_0$, and when $\gamma\in E_0$ and $\psi\in E$, or when $\gamma\in E_1$ and $\psi\in E_2$, the commutator $[\gamma,\psi]=\gamma\psi-\psi\gamma$ lies in $E_0$ and $\operatorname{Tr}_V([\gamma,\psi])=0$. ([[lem-e-ideals-and-commutator-trace]])

[F5] (T4) $\operatorname{Tr}_V$ is $k$-linear on every finite potent $k$-subspace $F\subseteq\operatorname{End}_k(V)$; (T5) whenever $\varphi\colon V'\to V$ and $\psi\colon V\to V'$ are $k$-linear and $\psi\varphi$ is finite potent, also $\varphi\psi$ is finite potent and $\operatorname{Tr}_V(\varphi\psi)=\operatorname{Tr}_{V'}(\psi\varphi)$. ([[lem-finite-potent-trace-linearity-and-conjugation]])

[F6] $\operatorname{res}_V\colon\Omega^1_{K/k}\to k$ is the unique $k$-linear map with $\operatorname{res}_V(f\,\mathrm dg)=\operatorname{Tr}_V([f_1,g_1])$ for all $f,g\in K$ and all $f_1,g_1\in E$ with $f_1\equiv f$ and $g_1\equiv g$ modulo $E_2$ and with $f_1\in E_1$ or $g_1\in E_1$; the elements $f\,\mathrm dg$ generate $\Omega^1_{K/k}$ as a $K$-module. ([[thm-abstract-residue-exists-unique]])

[F7] For a finite-dimensional $k$-vector space $W$, the dimension $\dim_kW$ and the ordinary trace of any endomorphism of $W$ are defined, the trace is $k$-linear, and the trace of $\mathrm{id}_W$ is $\dim_kW$. ([[def-dimension]], [[def-trace-of-an-endomorphism]])

[F8] The finite-potent trace is additive over a stable subspace and the induced quotient (property (T2)), and it vanishes for a nilpotent endomorphism (property (T3)). ([[lem-finite-potent-trace-existence-and-uniqueness]])

## Proof

**Proof technique:** direct.

1.1 (Setup) By [F2] fix a $k$-linear projection $\pi\colon V\to A$ with $\pi|_A=\mathrm{id}_A$; then $\pi\circ\pi=\pi$, $\pi V=A$, so $\pi\in E_1$ because $A<A$, and $(\pi-\mathrm{id}_V)(A)=0$ is finite-dimensional, so $\pi\equiv\mathrm{id}_V\pmod{E_2}$. [given, F2, F3, F4, choose]

1.2 (Claim 4: the two quotients) Let $g\in K^\times$ and $h\in K$ with $hA\subseteq A$, and put $N:=A\cap gA$. The standing hypothesis $fA<A$ applied to $g$ gives $gA<A$, and applied to $g^{-1}$ it gives $g^{-1}A<A$, hence $A=g(g^{-1}A)<gA$ by the stability of $<$ under the $k$-linear map $g$; therefore $(A+gA)/gA\cong A/N$ and $(A+gA)/A\cong gA/N$ are finite-dimensional, and $N$ is of finite codimension in both $A$ and $gA$. Moreover $hA\subseteq A$ and $hgA=ghA\subseteq gA$, so $m_h$ preserves $A$, $gA$ and $N$ and induces $k$-linear endomorphisms $\alpha_A$ of $A/N$ and $\alpha_{gA}$ of $gA/N$. [given, F1, F3, F7]

2.1 (Standard lifts) For $f\in K$ put $f_\sharp:=\pi\circ f\in\operatorname{End}_k(V)$; then $f_\sharp V=\pi(fV)\subseteq A$, so $f_\sharp\in E_1$ by [F3], and $(f_\sharp-f)(A)=(\pi-\mathrm{id}_V)(fA)\subseteq(\pi-\mathrm{id}_V)(W)$ for a finite-dimensional $W$ with $fA\subseteq A+W$, so $f_\sharp\equiv f\pmod{E_2}$; hence for all $f,g\in K$ the pair $(f_\sharp,g_\sharp)$ is admissible in [F6] and $\operatorname{res}_V(f\,\mathrm dg)=\operatorname{Tr}_V([f_\sharp,g_\sharp])$. [step 1.1, F3, F4, F6, algebra]

2.2 (Claim 4: the lifts and $\theta$) Put $f:=hg^{-1}\in K$ and choose the lifts $f_1:=\pi\circ f$ and $g_1:=g$; then $f_1V=\pi(fV)\subseteq A$, so $f_1\in E_1$ by [F3], and $(f_1-f)A=(\pi-\mathrm{id}_V)(fA)$ is finite-dimensional because the standing hypothesis $fA<A$ gives $fA\subseteq A+W$ for a finite-dimensional $W$, so $f_1\equiv f\pmod{E_2}$ while $g_1=g$ trivially; hence the pair $(f_1,g_1)$ is admissible in [F6] and $\operatorname{res}_V(f\,\mathrm dg)=\operatorname{Tr}_V(\theta)$ for $\theta:=[f_1,g_1]=\pi m_{fg}-g\pi m_f$. Since $fg=h$ and multiplication by $g$ and $h$ commutes, $g\pi m_f=g\pi m_{g^{-1}}m_h=(g\pi g^{-1})m_h=\pi_gm_h$, where $\pi_g:=g\pi g^{-1}$ is a $k$-linear projection of $V$ onto $gA$; thus $\theta=(\pi-\pi_g)m_h$. No commutation of either projection with multiplication is used. [step 1.1, step 1.2, F1, F3, F6, algebra]

(ii) if $\theta\in E_0$ satisfies $\theta V\subseteq A$, then $\varphi:=\theta\colon V\to A$ and the inclusion $\psi\colon A\to V$ are $k$-linear with $\psi\varphi=\theta$ finite potent, so (T5) gives $\operatorname{Tr}_V(\theta)=\operatorname{Tr}_A(\theta|_A)$, and if moreover $\theta(A)=0$ then $\operatorname{Tr}_A(\theta|_A)=0$ by [F8]; 
(iii) if $\theta\in E_0$ and $V\prime\subseteq V$ satisfies $\theta V\subseteq V\prime$ and $\theta V\prime\subseteq V\prime$, then $\theta$ viewed as a map $V\to V\prime$ and the inclusion $V\prime\to V$ are $k$-linear with composite $\theta$, so (T5) gives $\operatorname{Tr}_V(\theta)=\operatorname{Tr}_{V\prime}(\theta|_{V\prime})$; 
(iv) if $f_1,g_1\in E_1$ satisfy $f_1\equiv f\pmod{E_2}$ and $g_1\equiv g\pmod{E_2}$ for commuting elements $f,g\in K$, then $[f_1,g_1]\in E_1$ because $E_1$ is a two-sided ideal, while $[f_1,g_1]\equiv[f,g]=0\pmod{E_2}$ because $E_2$ is a two-sided ideal, so $[f_1,g_1]\in E_1\cap E_2=E_0$. [step 2.1, F1, F4, F5, algebra]

3.1 (Framework) From steps 1.1 and 2.1 we record: (i) for every $f\in K$ and $n\ge1$ one has $(f_\sharp)^n\in E_1$ and $(f_\sharp)^n\equiv f^n\pmod{E_2}$, because $E_1$ and $E_2$ are two-sided ideals; for $n=0$, the identity is a lift of $1$ in $E$ and can be paired with an $E_1$ lift; (ii) if $\theta\in E_0$ satisfies $\theta V\subseteq A$, then $\varphi:=\theta\colon V\to A$ and the inclusion $\psi\colon A\to V$ are $k$-linear with $\psi\varphi=\theta$ finite potent, so (T5) gives $\operatorname{Tr}_V(\theta)=\operatorname{Tr}_A(\theta|_A)$, and if moreover $\theta(A)=0$ then $\operatorname{Tr}_A(\theta|_A)=0$ by [F8]; (iii) if $\theta\in E_0$ and $V'\subseteq V$ satisfies $\theta V\subseteq V'$ and $\theta V'\subseteq V'$, then $\theta$ viewed as a map $V\to V'$ and the inclusion $V'\to V$ are $k$-linear with composite $\theta$, so (T5) gives $\operatorname{Tr}_V(\theta)=\operatorname{Tr}_{V'}(\theta|_{V'})$; (iv) if $f_1,g_1\in E_1$ satisfy $f_1\equiv f\pmod{E_2}$ and $g_1\equiv g\pmod{E_2}$ for commuting elements $f,g\in K$, then $[f_1,g_1]\in E_1$ because $E_1$ is a two-sided ideal, while $[f_1,g_1]\equiv[f,g]=0\pmod{E_2}$ because $E_2$ is a two-sided ideal, so $[f_1,g_1]\in E_1\cap E_2=E_0$. [step 2.1, F1, F4, F5, F8, algebra]

3.2 (Claim 1: restriction, setup) Let $V'$ be a $k$-subspace with $A\subseteq V'\subseteq V$ and $KV'\subseteq V'$; then the restrictions $f_\sharp|_{V'},g_\sharp|_{V'}$ are $k$-linear maps $V'\to A\subseteq V'$ with images in $A$, so they lie in $E_1(V')$, they satisfy $f_\sharp|_{V'}-f|_{V'}=(f_\sharp-f)|_{V'}$ with $(f_\sharp-f)(A)$ finite-dimensional, so $f_\sharp|_{V'}\equiv f|_{V'}\pmod{E_2(V')}$, and $(f_\sharp|_{V'},g_\sharp|_{V'})$ is admissible for the pair $(V',A)$, giving $\operatorname{res}_{V'}(f\,\mathrm dg)=\operatorname{Tr}_{V'}(\theta|_{V'})$ for $\theta:=[f_\sharp,g_\sharp]$. [step 2.1, F3, F6]

3.3 (Claim 4: the induced map on $B/N$) Let $B:=A+gA$ and $N:=A\cap gA$. The endomorphism $\theta=(\pi-\pi_g)m_h$ of step 2.2 maps $V$ into $B$, since $\pi m_h(V)\subseteq A$ and $\pi_gm_h(V)\subseteq gA$. It preserves $B$, and it kills $N$: multiplication by $h$ preserves $N$ by step 1.2, while both $\pi$ and $\pi_g$ restrict to the identity on $N\subseteq A\cap gA$. Thus $B$ and $N$ are $\theta$-stable and $\theta$ induces an endomorphism $\bar\theta$ of the finite-dimensional quotient $B/N$. By (T2), first for $B\subseteq V$ and then for $N\subseteq B$, the trace on $V$ is the trace on $B$ plus the trace of the zero induced map on $V/B$, and the trace on $B$ is the trace on $N$ plus $\operatorname{Tr}_{B/N}(\bar\theta)$. Both zero terms vanish, so $\operatorname{Tr}_V(\theta)=\operatorname{tr}_{B/N}(\bar\theta)$. [step 1.2, step 2.2, F3, F8, algebra]

4.1 (Claim 1: commensurability) Let $A'\sim A$ with $fA'<A'$ for all $f\in K$; by [F3] the spaces $E(A')=E(A)$, $E_1(A')=E_1(A)$, $E_2(A')=E_2(A)$ coincide, so the class of admissible lifts in the defining formula of [F6] is the same for the pairs $(V,A')$ and $(V,A)$, and by step 2.1 the pair $(f_\sharp,g_\sharp)$ is admissible in both cases with value $\operatorname{Tr}_V([f_\sharp,g_\sharp])$; hence $\operatorname{res}_{A'}(f\,\mathrm dg)=\operatorname{res}_A(f\,\mathrm dg)$ on all generators and therefore, both maps being $k$-linear, $\operatorname{res}_{A'}=\operatorname{res}_A$. [step 3.1, F3, F6]

4.2 (Claim 1: vanishing) The hypothesis of claim (1) is that $V/A$ is finite-dimensional. For any $\theta\in\operatorname{End}_k(V)$, the image $(\theta V+A)/A$ of $\theta V$ under the quotient map $V\to V/A$ is therefore a subspace of the finite-dimensional space $V/A$, hence finite-dimensional, since every subspace of a finite-dimensional vector space is finite-dimensional. Thus $\theta V<A$ and $E_1=\operatorname{End}_k(V)$; taking the lifts $f_1:=f$ and $g_1:=g$ of $f$ and $g$ (endomorphisms as elements of the image of $K$ in $E$) gives $\operatorname{res}_V(f\,\mathrm dg)=\operatorname{Tr}_V([f,g])=\operatorname{Tr}_V(0)=0$ by [F6], since elements of $K$ commute and $\operatorname{Tr}_V(0)=0\cdot\operatorname{Tr}_V(0)=0$ by the $k$-linearity of the trace on the finite potent space $E_0$; hence $\operatorname{res}_V=0$. [step 3.1, F1, F3, F4, F5, F6, F7]

4.3 (Claim 2: continuity, full Tate condition) Suppose $fA+fgA+fg^2A\subseteq A$. This gives $fA\subseteq A$, $fgA\subseteq A$ and $fg^2A\subseteq A$. Use the admissible lifts $f_1:=\pi f$ and $g_1:=g$ from step 2.1, and put $\theta:=[f_1,g]$. Then $\theta(V)\subseteq A+gA$ because $\pi f g(V)\subseteq A$ and $g\pi f(V)\subseteq gA$. For $a\in A$, the equalities $\pi fga=fga$ and $g\pi fa=gfa=fga$ show $\theta a=0$, using $fgA\subseteq A$ and $fA\subseteq A$. For $ga\in gA$, the equalities $\pi fg^2a=fg^2a$ and $g\pi fga=g fga=fg^2a$ show $\theta(ga)=0$, using $fg^2A\subseteq A$ and $fgA\subseteq A$. Therefore $\theta$ vanishes on $A+gA$, so $\theta^2=0$; its finite-potent trace is zero by [F8], and the defining formula gives $\operatorname{res}_V(f\,\mathrm dg)=0$. [step 2.1, step 3.1, F4, F5, F8, algebra]

4.4 (Claim 3: nonnegative powers) If $n\ge1$, both $(f_\sharp)^n$ and $f_\sharp$ are admissible $E_1$ lifts of $f^n$ and $f$ by step 3.1(i), so $\operatorname{res}_V(f^n\,\mathrm df)=\operatorname{Tr}_V([(f_\sharp)^n,f_\sharp])=0$ because these powers commute. If $n=0$, use $1\in E$ as a lift of $f^0=1$ and the $E_1$ lift $f_\sharp$ of $f$; this pair is admissible and its commutator is zero, so $\operatorname{res}_V(\mathrm df)=0$. [step 3.1, F5, F6, algebra]

4.5 (Claim 1: restriction concluded) For the pair $(V',A)$ of step 3.2 the commutator $\theta=[f_\sharp,g_\sharp]$ lies in $E_0(V)$ by step 3.1(iv) and satisfies $\theta V\subseteq\pi(fV)+\pi(gV)\subseteq A\subseteq V'$, so $\theta$ is an endomorphism of $V$ with image in $V'$ and $\theta V'\subseteq A\subseteq V'$; by step 3.1(iii) $\operatorname{Tr}_V(\theta)=\operatorname{Tr}_{V'}(\theta|_{V'})$, whence $\operatorname{res}_V(f\,\mathrm dg)=\operatorname{res}_{V'}(f\,\mathrm dg)$ on all generators, and both maps being $k$-linear, $\operatorname{res}_V=\operatorname{res}_{V'}$. [step 3.1, step 3.2, F5, F6]

4.6 (Claim 4: the two traces) The classes of $A$ and of $gA$ modulo $N$ have zero intersection and span $B/N$, so $B/N=A/(A\cap gA)\oplus gA/(A\cap gA)$ is a direct sum. The map $\pi m_h$ sends $B$ into $A$ and preserves $N$ (its restriction to $N$ is $m_h|_N$, since $hN\subseteq N$); therefore it induces an endomorphism of $B/N$ with image in $A/N$. Its restriction to $A/N$ is $\alpha_A$ because $ha\in A$ for $a\in A$. Relative to the displayed direct sum, this induced map has image in the first summand, so its trace is $\operatorname{Tr}(\alpha_A)$. Similarly, $\pi_gm_h$ sends $B$ into $gA$, preserves $N$ (and restricts to $m_h|_N$ there), and induces an endomorphism of $B/N$ with image in $gA/N$ whose restriction to that summand is $\alpha_{gA}$; its trace is $\operatorname{Tr}(\alpha_{gA})$. Hence $\operatorname{Tr}_{B/N}(\bar\theta)=\operatorname{Tr}(\alpha_A)-\operatorname{Tr}(\alpha_{gA})$, that is, $\operatorname{res}_V(hg^{-1}\,\mathrm dg)=\operatorname{Tr}_{A/(A\cap gA)}(m_h)-\operatorname{Tr}_{gA/(A\cap gA)}(m_h)$ by steps 2.2 and 3.3. [step 1.2, step 2.2, step 3.3, F7, algebra]

5.1 (Claim 2 concluded) For $\theta$ as in step 4.3 with $\theta(V)\subseteq A$ and $\theta(A)=0$, step 3.1(ii) gives $\operatorname{Tr}_V(\theta)=0$, hence $\operatorname{res}_V(f\,\mathrm dg)=0$ for all $f,g$ with $fA\subseteq A$ and $gA\subseteq A$, which is equivalent to $fA+gA+fgA\subseteq A$; if $A$ is a $K$-submodule of $V$ then $fA\subseteq A$ and $gA\subseteq A$ for all $f,g\in K$, so $\operatorname{res}_V$ vanishes on the generators $f\,\mathrm dg$ and therefore on $\Omega^1_{K/k}$. [step 4.3, F1, F6]

5.2 (Claim 3: negative powers) Let $f\in K^\times$ and $n\le-2$, and put $F:=f^{-1}\in K$ and $m:=-n-2\ge0$; from $\mathrm d(fF)=0$ and the Leibniz rule one gets $\mathrm df=-f^2\,\mathrm dF$, hence $f^n\,\mathrm df=-f^{n+2}\,\mathrm dF=-F^{m}\,\mathrm dF$, and the $k$-linearity of $\operatorname{res}_V$ together with step 4.4 applied to $F$ gives $\operatorname{res}_V(f^n\,\mathrm df)=-\operatorname{res}_V(F^m\,\mathrm dF)=0$. [step 4.4, F1, F6, algebra]

5.3 (Claim 3: the case $n=0$) Taking $n=0$ in step 4.4 gives $\operatorname{res}_V(\mathrm df)=0$ for every $f\in K$, since $\mathrm df=f^0\,\mathrm df$; this is the "in particular" clause of claim (3). [step 4.4, F1]

5.4 (Claim 4: the special case) If $gA\subseteq A$ then $N=A\cap gA=gA$, so in the formula of step 4.6 the second quotient $gA/N$ is the zero space with zero trace, while the first quotient is $A/gA$ and, for $h=1$, the induced endomorphism $\alpha_A$ is induced by the identity, that is, $\alpha_A=\mathrm{id}_{A/gA}$; hence $\operatorname{res}_V(g^{-1}\mathrm dg)=\operatorname{Tr}_{A/gA}(\mathrm{id})=\dim_k(A/gA)$ by [F7]. [step 4.6, F7, algebra]

6.1 Claims (1)-(4) are established: (1) in steps 4.1, 4.5 and 4.2; (2) in steps 4.3, 5.1 and 5.3; (3) in steps 4.4, 5.2 and 5.3; and (4) in steps 1.2, 2.2, 3.3, 4.6 and 5.4, where the general two-term formula of part (4) specialises to the case $gA\subseteq A$ with $h=1$; the Axiom of Choice entered only through the choices of the projection in step 1.1 and of the projection $\pi$ used in steps 3.3 and 4.6 (via [F2]). [step 4.1, step 4.2, step 4.4, step 4.5, step 5.1, step 5.2, step 5.3, step 3.3, step 4.6, step 5.4, F2] ∎
