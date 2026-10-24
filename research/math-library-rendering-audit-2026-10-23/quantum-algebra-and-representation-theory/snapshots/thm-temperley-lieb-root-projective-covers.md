---
id: thm-temperley-lieb-root-projective-covers
kind: theorem
title: "Projective covers of complex-root Temperley–Lieb simple modules"
status: published
dependency_level: 11
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [lem-temperley-lieb-root-noncritical-radicals-and-simple-heads, lem-temperley-lieb-annular-central-element-and-reflection-maps, thm-temperley-lieb-link-state-diagram-basis-is-cellular, thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras, thm-schurs-lemma-for-modules]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ridout–Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§8 Theorem 8.1 and Proposition 8.2; the proof here obtains the standard filtrations directly from the cellular bimodule layers."
---

## Statement

Let $q\in\mathbb C^\times$, $\delta=q+q^{-1}$, $A_n=\mathrm{TL}_n(\mathbb C,\delta)$, $V_{n,p}=W_{n,n-2p}(\mathbb C,\delta)$ and $L_{n,p}=V_{n,p}/\operatorname{rad}\phi_{n,n-2p}$. For each nonzero $L_{n,p}$ let $P_{n,p}\twoheadrightarrow L_{n,p}$ be its projective cover. These covers exhaust the indecomposable finite-dimensional projective right modules up to isomorphism.

If $\kappa=\operatorname{ord}(q^2)$ is $1$ or $\infty$, all standards are simple and projective: $P_{n,p}=V_{n,p}=L_{n,p}$ up to isomorphism. For finite $\kappa\ge2$, a critical label has $P_{n,p}\cong V_{n,p}=L_{n,p}$. At a noncritical label write $n-2p+1=k\kappa+r$, $1\le r<\kappa$.

If $k=0$, then $P_{n,p}\cong V_{n,p}$. If $k>0$, there is a nonsplit exact sequence
$$0\longrightarrow V_{n,p+r}\longrightarrow P_{n,p}\longrightarrow V_{n,p}\longrightarrow0.$$
Moreover $P_{n,p}$ is the generalized $F_n$-eigenspace of eigenvalue $f_{n,p}=q^{n-2p+1}+q^{-(n-2p+1)}$ in the $r$-fold induced module
$$V_{n-r,p}\uparrow\cdots\uparrow.$$
Thus its standard filtration has exactly the two displayed terms, each once; its composition factors are precisely the combined factors of those terms given by the radical theorem.

At $\delta=0$, odd ranks have $P_{n,p}=V_{n,p}=L_{n,p}$. At even rank $n=2m>0$ there are only the covers $P_{2m,p}$ for $0\le p<m$, and
$$P_{2m,p}\cong V_{2m-1,p}\uparrow,\qquad0\longrightarrow V_{2m,p+1}\longrightarrow P_{2m,p}\longrightarrow V_{2m,p}\longrightarrow0.$$
There is no cover labeled by the zero form quotient $L_{2m,m}=0$; its actual simple standard $V_{2m,m}$ is already isomorphic to $L_{2m,m-1}$. Rank zero has its single one-dimensional simple projective.

## Facts & Assumptions

**Given:** The complex diagram algebra, its standards and simple heads, with ordinary zero-form quotient labels retained.

[F1] The complete standard composition factors and their exceptional zero-loop convention are [[lem-temperley-lieb-root-noncritical-radicals-and-simple-heads]]. The nonzero heads are self-dual for the duality induced by diagram reflection: their nondegenerate quotient forms identify them with their twisted linear duals.

[F2] The cellular diagram basis gives a filtration by two-sided ideals of diagrams with at most a given number of propagating strands. Its layer at defect label $t=n-2s$ is the bimodule $U_s\otimes_{\mathbb C}V_{n,s}$, where $U_s$ is the left module obtained from $V_{n,s}$ by reflection ([[thm-temperley-lieb-link-state-diagram-basis-is-cellular]]).

[F3] Finite-dimensional modules over finite-dimensional algebras have projective covers, unique up to isomorphism over the target ([[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]]), applied also to the opposite algebra for right modules. A cover has a superfluous kernel.

[F4] The central $F_n$, its standard eigenvalues and the induction sequences are [[lem-temperley-lieb-annular-central-element-and-reflection-maps]].

[F5] Every nonzero endomorphism of a simple module is invertible ([[thm-schurs-lemma-for-modules]]).

## Proof

**Proof technique:** Apply a primitive projective summand to the cellular bimodule filtration, and identify the repeated-induction realization by its two extremal standard constituents.

1.1 Fix a nonzero head $L=L_{n,p}$ and its finite-dimensional projective cover $\pi:P\to L$ from [F3]. Since $L$ is cyclic, choose a surjection $\alpha:A_n\to L$. Projectivity of $P$ and of the finite free module $A_n$ gives maps $s:P\to A_n$ and $t:A_n\to P$ with $\alpha s=\pi$ and $\pi t=\alpha$. Then $\pi ts=\pi$. Consequently $P=ts(P)+\ker\pi$; superfluity gives $ts(P)=P$, so $ts$ is invertible by finite dimensionality. Replacing $s$ by $s(ts)^{-1}$ makes $ts=1$. Thus $P$ is a direct summand $eA_n$ of the right regular module for an idempotent $e$ (a right-module endomorphism of $A_n$ is left multiplication by its value at $1$). The cover is indecomposable: a nonzero decomposition would give a proper summand surjecting onto $L$, contrary to the superfluous kernel. [F3, given, choose, construct, algebra]

2.1 If $S$ is any simple right module and $h:P\to S$ is nonzero, then its kernel is maximal. Superfluity of $\ker\pi$ implies $\ker\pi\subseteq\ker h$: otherwise their sum is $P$ and the superfluity condition would force $\ker h=P$. Thus $h$ factors through $L$. On a finite-dimensional complex simple module an endomorphism $u$ has an eigenvalue $\lambda$; since $u-\lambda1$ has a nonzero kernel, [F5] makes it zero. Thus its endomorphism space is $\mathbb C$. By [F1], $\dim\operatorname{Hom}_{A_n}(eA_n,S)$ is $1$ for $S=L$ and $0$ otherwise. Evaluation at $e$ identifies this Hom space with $Se$: the inverse sends $v\in Se$ to the map $ea\mapsto va$. Hence $\dim Se$ has those same values. This also proves any finite-dimensional projective module surjecting onto $L$ contains $P$ as a summand, by repeating step 1.1 with that module in place of $A_n$. Finally every indecomposable projective has a simple quotient, hence is the cover of that quotient by this summand assertion. [F1, F3, F5, step 1.1, algebra]

3.1 Left multiplication by $e$ is an exact functor on left modules: for an exact sequence, a lift of $ey$ can be replaced by $e$ times that lift. The cellular basis itself identifies each ideal layer in [F2] with $U_s\otimes V_{n,s}$: map its basis tensor $x\otimes y$ to the class of $C^t_{x,y}$. Right multiplication acts only on $y$ by the cellular triangular rule, and left multiplication acts only on $x$ by reflecting that rule; this proves the bimodule identification, including the zero-form layers. Applying the exact functor gives a filtration of $eA_n=P$ with layers $(eU_s)\otimes V_{n,s}$, hence $\dim eU_s$ copies of $V_{n,s}$. To compute this multiplicity, write $\sigma(a)=a^*$ for diagram reflection and convert a left module $U$ to the right module with action $u\cdot a=\sigma(a)u$. By the cellular-basis construction under reflection, this converts $U_s$ to $V_{n,s}$, so $\dim(eU_s)=\dim(V_{n,s}\sigma(e))$. The idempotent $e$ is primitive because $eA_n$ is an indecomposable projective cover of $L=L_{n,p}$. Evaluation at $e$ gives $\operatorname{Hom}_{A_n}(eA_n,L)\cong Le\cong\mathbb C$. For the contragredient dual $L^\vee=\operatorname{Hom}_{\mathbb C}(L,\mathbb C)$ with $(\varphi\cdot a)(x)=\varphi(x\sigma(a))$, restriction to $Le$ gives $L^\vee\sigma(e)\cong(Le)^*\ne0$. Thus the indecomposable projective $\sigma(e)A_n$ has simple top $L^\vee\cong L$, by the self-duality in [F1], and is another projective cover of $L$. Uniqueness of covers [F3] gives $eA_n\cong\sigma(e)A_n$, so $e$ and $\sigma(e)$ are equivalent idempotents: an isomorphism $eA_n\to\sigma(e)A_n$ supplies elements $x\in\sigma(e)A_ne$ and $y\in eA_n\sigma(e)$ with $xy=\sigma(e)$ and $yx=e$. The maps $me\mapsto my$ and $mf\mapsto mx$ identify $Me$ with $Mf$ for every right module $M$, where $f=\sigma(e)$, so $\dim(V_{n,s}\sigma(e))=\dim(V_{n,s}e)$. The functor $M\mapsto Me$ is exact on right modules; $Se$ is one-dimensional for $S\cong L$ by Schur's lemma and zero for every other simple, since $eA_n$ covers $L$. Therefore $\dim(V_{n,s}e)=[V_{n,s}:L]$. This proves the standard filtration formula $[P_{n,p}:V_{n,s}]=[V_{n,s}:L_{n,p}]$, without assuming semisimplicity or quasiheredity. Its layer order is increasing defect number, equivalently decreasing arc count. [F1, F2, F3, F5, step 1.1, step 2.1, algebra]

4.1 At a critical label, [F1] says the only standard containing $L_{n,p}$ is $V_{n,p}$, once. Step 3.1 gives $P_{n,p}\cong V_{n,p}$. The same argument applies to every label at $\kappa=1,\infty$. At a finite-order noncritical nonzero head, the standards containing it are $V_{n,p}$ and, when present, its neighbor on the lower-defect side, $V_{n,b}$ with $b=p+r$. This follows by solving the adjacent-reflection relation in [F1] in the reverse direction. If $k=0$, $n-2b+1=-r<0$ and $b$ is absent. If $k>0$, $n-2b=k\kappa-r-1\ge0$ and it is present. Each occurrence has multiplicity one. At $\kappa=2$, even rank, the possible $b=n/2$ is included because the zero-form standard is the actual simple $L_{n,n/2-1}$ by [F1]. Thus step 3.1 gives either $P_{n,p}=V_{n,p}$ or exactly the asserted two-standard filtration. Since $b>p$, its $V_{n,b}$ layer is a submodule and its $V_{n,p}$ layer the quotient, yielding the exact sequence. It is nonsplit: both standards are nonzero, whereas the cover in step 1.1 is indecomposable. [F1, step 1.1, step 3.1, algebra]

5.1 For $k>0$, the starting label $(n-r,p)$ has defect number $k\kappa-1$ and is critical; its standard is projective by step 4.1. Induction preserves projectivity: the adjunction in [F4] identifies maps from an induced module with maps from the original module into a restriction, and restriction preserves surjections, so the defining lifting property is preserved. The $r$-fold induced module $Q$ is therefore projective. Repeatedly applying the standard induction sequences gives a filtration of $Q$ whose layers are quotients of the standards $V_{n,p+j}$, $0\le j\le r$, with multiplicities at most $\binom rj$. To justify this even though induction is only right exact, induct the existing filtration: the images of its submodules still form a filtration, and each new layer is a quotient of the induction of the old layer; the two-term sequence in [F4] refines these layers. No left-exactness is assumed. The exceptional induction input $(2,1,0)$ is never encountered: every intermediate defect is at least $k\kappa-1-(r-1)>0$. [F4, step 2.1, step 4.1, algebra]

6.1 On the standard indexed by $p+j$ the central eigenvalue is $q^{k\kappa+r-2j}+q^{-(k\kappa+r-2j)}$. It equals $f_{n,p}$ exactly when $j\equiv0$ or $j\equiv r\pmod\kappa$: use $x+x^{-1}=y+y^{-1}$ if and only if $(x-y)(x-y^{-1})=0$, and $q^{2k\kappa}=1$. Since $0\le j\le r<\kappa$, only $j=0,r$ qualify. Generalized eigenspaces of a central operator are submodules; the associated polynomial spectral projection is exact on finite-dimensional modules, as is seen by applying the same projection to a lift. Thus the $f_{n,p}$-space $Q_f$ is projective and step 5.1 bounds its dimension by $\dim V_{n,p}+\dim V_{n,p+r}$. Successive standard quotient maps give a surjection $Q\to V_{n,p}\to L_{n,p}$; its restriction to $Q_f$ remains onto, because the other generalized eigenspaces have distinct eigenvalues. Step 2.1 makes $P_{n,p}$ a direct summand of $Q_f$. Step 4.1 already gives $\dim P_{n,p}=\dim V_{n,p}+\dim V_{n,p+r}$, so the bound is saturated and $Q_f\cong P_{n,p}$, proving the stated realization. [F4, step 2.1, step 4.1, step 5.1, algebra]

7.1 At $\delta=0$, $\kappa=2$. Odd ranks have only critical labels and are covered by step 4.1. At rank $2m$, the simple labels are $0\le p<m$ by [F1]; each has $r=1$ and $k>0$. The repeated-induction realization in step 6.1 therefore has just one induction, from the odd-rank critical standard $V_{2m-1,p}$. Its two standard constituents both have eigenvalue $0$, so the entire induction is the selected generalized eigenspace. This proves the final displayed formulas and excludes a cover for the zero quotient label. At rank zero the algebra is $\mathbb C$, whose single simple regular module is projective. All covers and all exceptional cases have now been included. [F1, F4, step 4.1, step 6.1, algebra] ∎
