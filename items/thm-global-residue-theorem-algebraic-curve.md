---
id: thm-global-residue-theorem-algebraic-curve
kind: theorem
title: "The global residue theorem on a smooth proper curve over a perfect field"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-coefficient-trace-residue-agreement
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-commensurable-subspaces-and-ideals-of-endomorphisms
  - def-function-field-variety
  - def-kahler-differentials-algebra
  - def-residue-rational-differential-curve-point
  - lem-abstract-residue-additivity
  - lem-abstract-residue-basic-properties
  - lem-adelic-quotient-computes-h1-structure-sheaf
  - lem-finite-potent-trace-existence-and-uniqueness
  - lem-uniformizer-differential-is-a-basis
  - thm-abstract-residue-exists-unique
  - thm-h0-structure-sheaf-proper-curve
  - thm-local-ring-smooth-curve-dvr
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the residue and
coherent-cohomology suppliers. Let $C$ be a smooth proper geometrically
integral curve over a perfect field $k$ and let $\omega$ be a rational
differential on $C$, i.e. an element of $\Omega^1_{k(C)/k}$. Then
$\operatorname{res}_p(\omega)$ is nonzero at only finitely many closed points
$p$ of $C$, and the sum of the residues vanishes:
$$\sum_{p\in C}\operatorname{res}_p(\omega)=0 .$$
The residue may be computed by the coefficient-trace formula of the local
residue definition (the agreement between the abstract residue and the
coefficient-trace residue is the content of the cited corollary); the
statement is characteristic-free, and no separability hypothesis beyond
perfectness of $k$ is used.

## Facts & Assumptions

**Given:** a perfect field $k$, a smooth proper geometrically integral curve
$C$ over $k$ with function field $K=k(C)$, and a rational differential
$\omega\in\Omega^1_{K/k}$.

[F1] Every closed point $p$ of $C$ has local ring a discrete valuation ring
$\mathcal O_{C,p}$ with fraction field $K$, uniformizer $t$ and residue field
$\kappa(p)$; since $k$ is perfect, $\kappa(p)/k$ is finite separable, so the
local residue $\operatorname{res}_p\colon\Omega^1_{K/k}\to k$ is defined at
every closed point by $\operatorname{res}_p(a\,dt)=\operatorname{Tr}_{\kappa(p)/k}(a_{-1})$
for the Laurent expansion $a=\sum_na_nt^n$, independently of the choice of
uniformizer ([[def-residue-rational-differential-curve-point]],
[[def-algebraic-curve-over-field]], [[def-function-field-variety]],
[[thm-local-ring-smooth-curve-dvr]]).

[F2] The $k$-vector space $\Omega^1_{K/k}$ is spanned by the elements $f\,dg$
with $f,g\in K$ ([[def-kahler-differentials-algebra]]). For any $k$-subspace
$A$ of a $K$-module $V$ with $fA<A$ for all $f\in K$ (in the sense of
[[def-commensurable-subspaces-and-ideals-of-endomorphisms]]) there is a unique
$k$-linear abstract residue $\operatorname{res}_A\colon\Omega^1_{K/k}\to k$
given on $f\,dg$ by the trace of a commutator of lifts of $f$ and $g$
([[thm-abstract-residue-exists-unique]]). In this formula an admissible lift
satisfies $h_1V<A$ (in particular, image contained in $A$ places it in
$E_1$), and a discrepancy whose restriction to $A$ has finite-dimensional
image lies in $E_2$; the resulting commutator is finite potent.

[F3] Additivity (Tate's $(R_5)$): if $A$ and $B$ are $k$-subspaces of $V$
with $fA<A$ and $fB<B$ for all $f\in K$, then
$f(A+B)<A+B$ and $f(A\cap B)<A\cap B$ for all $f\in K$, and
$\operatorname{res}_{A+B}+\operatorname{res}_{A\cap B}=\operatorname{res}_A+\operatorname{res}_B$
([[lem-abstract-residue-additivity]]).

[F4] Basic properties of the abstract residue: it depends only on the
commensurability class of the lattice, is zero whenever $V/A$ is
finite-dimensional, is zero when $A$ is a $K$-submodule of $V$, and satisfies
the continuity property (Tate's $(R_2)$) that
$$fA+fgA+fg^2A\subseteq A$$
implies $\operatorname{res}_A(f\,dg)=0$. In particular this holds when
$fA\subseteq A$ and $gA\subseteq A$, equivalently when
$fA+gA+fgA\subseteq A$ ([[lem-abstract-residue-basic-properties]]).

[F5] The adelic pair: $V_X$ is the restricted product of the completions
$K_p$ and $A_X=\prod_pA_p$; the diagonal copy of $K$ lies in $V_X$ and is a
$K$-submodule; $fA_X<A_X$ for every $f\in K$; for all $f,g\in K$ there is a
finite set $S$ of closed points outside which $f$, $g$, $g^{-1}$ are integral,
and on the tail $T=X\setminus S$ one has
$fA_T+fgA_T+fg^{-1}A_T\subseteq A_T$; moreover
$K\cap A_X=H^0(C,\mathcal O_C)$ and $V_X/(K+A_X)$ is finite-dimensional.
The proof of this supplier also shows that every $h\in K$ has only finitely
many poles and, at a pole $p$ of order $m=-\operatorname{ord}_p(h)>0$,
$(hA_p+A_p)/A_p$ has dimension $m[\kappa(p):k]$; the local quotient is zero
at all other points. These are the local bounds used below
([[lem-adelic-quotient-computes-h1-structure-sheaf]]).

[F6] $H^0(C,\mathcal O_C)=k$ for the smooth proper geometrically integral
curve $C$ ([[thm-h0-structure-sheaf-proper-curve]]); the abstract residue of
the one-point pair $(K_p,A_p)$ equals the coefficient-trace residue
$\operatorname{res}_p$ of [F1], and in particular it annihilates every
differential regular at $p$ ([[cor-coefficient-trace-residue-agreement]],
[[def-residue-rational-differential-curve-point]]).

[F7] The Axiom of Choice is [[def-axiom-of-choice]].

[F8] (Finite-potent trace property (T2).) If $\theta$ is a finite-potent
endomorphism of a $k$-vector space $V$ and $W\subseteq V$ is $\theta$-stable,
then
$$\operatorname{Tr}_V(\theta)=\operatorname{Tr}_W(\theta|_W)+\operatorname{Tr}_{V/W}(\bar\theta),$$
where $\bar\theta$ is the induced endomorphism of $V/W$
([[lem-finite-potent-trace-existence-and-uniqueness]]).

[F9] At each closed point $p$, the stalk of the sheaf of differentials is the
free module $\Omega^1_{C/k,p}=\mathcal O_{C,p}\,dt$ for a uniformizer $t$;
the universal derivation sends $g\in\mathcal O_{C,p}$ to this module, so if
$f,g\in\mathcal O_{C,p}$ then $f\,dg$ is regular at $p$. Its coefficient in
the completed basis $dt$ has no negative powers, and the coefficient-trace
residue therefore vanishes ([[lem-uniformizer-differential-is-a-basis]],
[[def-kahler-differentials-algebra]],
[[def-residue-rational-differential-curve-point]]).

## Proof

**Proof technique:** direct; reduce to $\omega=f\,dg$, apply additivity to the
adelic lattice and the diagonal copy of $K$, and split the adelic residue into
its finitely many local factors with a vanishing tail.

1.1 Reduce to generators and dispose of $g=0$. If $g=0$, then $dg=0$, so $f\,dg=0$ and every local residue and the abstract residue are zero by their $k$-linearity [F1, F2]. Now take $g\ne0$. By [F1] the local residues are defined at every closed point; by [F2] the adelic residue on $(V_X,A_X)$ is $k$-linear and defined because [F5] gives $K\subseteq V_X$ and $hA_X<A_X$ for every $h\in K$. The elements $f\,dg$ span $\Omega^1_{K/k}$ over $k$ by [F2], so it suffices to prove finite support and sum zero for arbitrary $f,g\in K$ with $g\ne0$. [F1, F2, F5, given]

1.2 The adelic residue vanishes. By [F3] applied to the two lattices $A_X$ and the diagonal copy of $K$ (both stable by [F5]) we have $\operatorname{res}_{A_X}+\operatorname{res}_K=\operatorname{res}_{K+A_X}+\operatorname{res}_{K\cap A_X}$. Each term on the right vanishes: $\operatorname{res}_{K+A_X}=0$ because $V_X/(K+A_X)$ is finite-dimensional by [F5] and the residue vanishes on lattices of finite codimension by [F4]; $\operatorname{res}_{K\cap A_X}=0$ because $K\cap A_X=H^0(C,\mathcal O_C)=k$ by [F5] and [F6], so $K\cap A_X$ is finite-dimensional over $k$ and commensurable with the zero subspace, whose residue is zero by [F4] since zero is a $K$-submodule; and $\operatorname{res}_K=0$ because $K$ is a $K$-submodule of $V_X$, again by [F4]. Hence $\operatorname{res}_{A_X}(f\,dg)=0$. [F3, F4, F5, F6]

1.3 Establish stability of the tail and the finite block decomposition. Choose a finite set $S$ outside which $f$, $g$ and $g^{-1}$ are integral, as in [F5], and put $T=C\setminus S$, $V_T=\{(x_p)_{p\in T}:x_p\in A_p\text{ for all but finitely many }p\}$, and $A_T=\prod_{p\in T}A_p$. This is a $K$-module pair: for fixed $h\in K$, its finite pole set and the finite exceptional set for an element of $V_T$ show that their product is integral outside a finite set. More precisely, let $P_h=\{p\in T:\operatorname{ord}_p(h)<0\}$, which is finite by the finite-pole calculation in [F5]; if $h=0$ this set is empty. For $p\in P_h$, put $m_p=-\operatorname{ord}_p(h)$. The local calculation in [F5] gives $\dim_k((hA_p+A_p)/A_p)=m_p[\kappa(p):k]<\infty$, and this quotient is zero for $p\notin P_h$. The coordinate map embeds $(hA_T+A_T)/A_T$ into the finite direct sum $\bigoplus_{p\in P_h}(hA_p+A_p)/A_p$: its kernel is zero because a class whose every coordinate is zero is represented by an element of $A_T$. Thus $hA_T<A_T$ for every $h\in K$. The same local calculation proves $hA_p<A_p$ for each $p\in S$, so every block pair is stable. By the definitions of the restricted product and product lattices, there are finite direct-sum decompositions
$$V_X=\left(\bigoplus_{p\in S}K_p\right)\oplus V_T,\qquad A_X=\left(\bigoplus_{p\in S}A_p\right)\oplus A_T,$$
and the diagonal $K$-action preserves every block. [F1, F5, step 1.1, given]

2.1 Split the abstract residue by admissible block lifts and trace additivity. Index the finitely many blocks in step 1.3 by $i$. By [F7] choose a $k$-linear projection $\pi_i:V_i\to A_i$ for each block. For $h=f,g$, define $h_i=\pi_i\circ m_h$, where $m_h$ is multiplication by $h$ on that block. The image of $h_i$ lies in $A_i$, so $h_i\in E_1(A_i)$. Since $hA_i<A_i$, choose a finite-dimensional $W_{h,i}$ with $hA_i\subseteq A_i+W_{h,i}$. Because $\pi_i$ is the identity on $A_i$, $(h_i-m_h)(A_i)\subseteq(\pi_i-\mathrm{id})(W_{h,i})$, a finite-dimensional space; hence $h_i\equiv m_h\pmod{E_2(A_i)}$. The block sums $\widetilde f=\bigoplus_i f_i$ and $\widetilde g=\bigoplus_i g_i$ are therefore admissible lifts for the pair $(V_X,A_X)$: their images lie in $A_X$, and their discrepancies on $A_X$ have finite-dimensional image since there are only finitely many blocks. Their commutator is block diagonal, $\Theta=[\widetilde f,\widetilde g]=\bigoplus_i\theta_i$, with $\theta_i=[f_i,g_i]$ finite potent by [F2]. For each block choose a positive exponent $N_i$ with $\theta_i^{N_i}(V_i)$ finite-dimensional and let $N=\max_iN_i$. Then $\Theta^N(V_X)=\bigoplus_i\theta_i^N(V_i)$ is finite-dimensional, so $\Theta$ is finite potent. Each block is $\Theta$-invariant; applying (T2) from [F8] successively to the partial sums of these finitely many blocks gives
$$\operatorname{Tr}_{V_X}(\Theta)=\sum_{p\in S}\operatorname{Tr}_{K_p}(\theta_p)+\operatorname{Tr}_{V_T}(\theta_T)=\sum_{p\in S}\operatorname{res}_{A_p}(f\,dg)+\operatorname{res}_{A_T}(f\,dg).$$
The second equality is the defining commutator formula [F2] on each stable block. By [F6], each point term is the local coefficient-trace residue, so this proves the claimed finite-block decomposition. [F2, F5, F6, F7, F8, step 1.3, choose, construct]

2.2 Only finitely many local residues are nonzero. If $p\notin S$, then $f,g\in\mathcal O_{C,p}$ by construction. By [F9], $f\,dg$ is regular at $p$, so its coefficient in the completed basis $dt$ has no negative powers; the coefficient-trace formula [F1] gives $\operatorname{res}_p(f\,dg)=0$. Thus the support of the local residues is contained in the finite set $S$. [F1, F9, step 1.3]

3.1 The tail vanishes and the finite sum is zero. At every $p\in T$, both $f$ and $g$ are integral by the choice of $S$, so pointwise multiplication gives $fA_T\subseteq A_T$ and $gA_T\subseteq A_T$. It follows also that $fgA_T\subseteq A_T$ and $fg^2A_T\subseteq A_T$, hence the full condition $fA_T+fgA_T+fg^2A_T\subseteq A_T$ in [F4] holds (and its stable-$f,g$ special case applies). Therefore $\operatorname{res}_{A_T}(f\,dg)=0$. Combining this with steps 1.2 and 2.1 gives $\sum_{p\in S}\operatorname{res}_p(f\,dg)=\operatorname{res}_{A_X}(f\,dg)=0$. [F4, F5, step 1.2, step 2.1]

4.1 Conclude. By step 2.2 the sum over all closed points is the finite sum over $S$, which vanishes by step 3.1. This proves finite support and sum zero for every $f\,dg$ with $g\ne0$, while step 1.1 handled $g=0$. Since these generators span $\Omega^1_{K/k}$ and every local residue and the adelic residue are $k$-linear [F1, F2], the two claims hold for every $\omega\in\Omega^1_{K/k}$. [F1, F2, step 1.1, step 3.1, step 2.2] ∎
