---
id: "lem-finite-lie-triangularization-and-rank-one-complete-reducibility"
kind: "lemma"
title: "Finite Lie triangularization and rank-one complete reducibility"
deps: ["def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action", "thm-primary-decomposition-for-an-endomorphism", "thm-fundamental-theorem-of-algebra-minimum-modulus-proof"]
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras, \u00a7\u00a711,15; local generalized-weight splitting proof"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every representation of a finite-dimensional solvable complex Lie algebra on a nonzero finite-dimensional complex vector space has a common eigenvector; in a suitable basis all its operators are upper triangular.

Every finite-dimensional complex representation of the relations $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$ is a finite direct sum of the simple modules $V_m$, $m\in\mathbb Z_{\ge0}$. The module $V_m$ has basis $v_0,\ldots,v_m$ and action
$$h v_k=(m-2k)v_k,\qquad f v_k=v_{k+1},\qquad e v_k=k(m-k+1)v_{k-1},$$
where missing endpoint vectors are zero. In particular $h$ is diagonalizable with integral eigenvalues and $e,f$ are nilpotent. On $V_m$, $fe$ acts at index $k$ by $k(m-k+1)$ and $ef$ by $(k+1)(m-k)$; the latter is strictly positive when $0\le k<m$. The zero representation is the empty sum. All assertions are choice-free.

## Facts & Assumptions

**Given:** The finite-dimensional complex Lie/representation conventions and derived-series solvability of [[def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action]]; a representation is a linear map preserving brackets into endomorphisms.

[F1] Generalized eigenspaces give a finite direct-sum decomposition by [[thm-primary-decomposition-for-an-endomorphism]], since complex polynomials split by repeated application of [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]. In particular every endomorphism of a nonzero finite-dimensional complex space has an eigenvector.

## Proof

1.1 For solvable $L$, induct on $\dim L$. The zero algebra is immediate. A nonzero solvable algebra has $[L,L]\ne L$, since otherwise its derived series never vanishes. Choose a codimension-one subspace $H$ containing $[L,L]$; it is an ideal and is solvable, because its derived series is contained in that of $L$. By induction choose $0\ne v$ with $av=\lambda(a)v$ for $a\in H$. Take $x\in L\setminus H$ and let $W$ be the span of $v,xv,x^2v,\ldots$. This span is finite-dimensional and $x$-invariant. The identity $a x^jv=x(a x^{j-1}v)+[a,x]x^{j-1}v$ and induction in $j$ show that $H$ preserves each initial span and acts on its new basis vector with diagonal coefficient $\lambda(a)$. Taking the first linearly dependent power therefore gives a basis of $W$ in which every $a\in H$ is upper triangular with constant diagonal $\lambda(a)$. [F1, given, algebra]

1.2 For the rank-one relations, direct induction gives $$e f^k v=f^k e v+k f^{k-1}(h-k+1)v\quad(k\ge1).$$ The commutation with $h$ similarly shifts generalized $h$-weights: $e$ sends the generalized weight-$\lambda$ space to weight $\lambda+2$, and $f$ to weight $\lambda-2$. F1 gives only finitely many such weights. Repeated application must eventually leave this finite set, so both $e$ and $f$ are nilpotent on any finite-dimensional representation. Choose an eigenvalue $\lambda$ with $\lambda+2$ absent and a nonzero $h$-eigenvector $v$ there. Then $ev=0$. Let $m\ge0$ be the last index with $f^m v\ne0$. The displayed identity at $k=m+1$ forces $\lambda=m$. The vectors $v,fv,\ldots,f^m v$ have distinct $h$-eigenvalues, are independent, and obey the action formulas in the Statement. [F1, given, algebra]

1.3 The operator $\Omega=h^2+2h+4fe$ commutes with $h,e,f$. For example, $[e,h^2]=-2(eh+he)$ and $[e,fe]=he$, so $[e,\Omega]=-2eh+2he-4e=0$; the computation with $f$ is identical after using $[f,h]=2f$ and $[f,e]=-h$. Thus its generalized eigenspaces are subrepresentations. [given, algebra]

2.1 As $W$ is also $x$-invariant, the trace of $[a,x]$ on $W$ is zero. Step 1.1 identifies it as $(\dim W)\lambda([a,x])$, so $\lambda([a,x])=0$. Applying the recurrence there to every $a\in H$ now proves $a x^jv=\lambda(a)x^jv$ for all $j$: in the induction, the commutator term has scalar $\lambda([a,x])=0$. Hence $H$ acts scalarly on $W$. F1 gives an eigenvector of $x|_W$, which is a common eigenvector for $L$. This completes the dimension induction. Apply the result successively to the quotients by its invariant one-dimensional spaces and lift their finite bases. This yields a full invariant flag and upper triangularity. [step 1.1, F1, algebra]

2.2 Each string constructed in step 1.2 is simple. Any nonzero invariant subspace contains some nonzero individual $h$-weight component: for distinct eigenvalues, the elementary interpolation polynomials $\prod_{\nu\ne\mu}(h-\nu)/(\mu-\nu)$ project onto the weight-$\mu$ line. Raising from that line uses only the nonzero coefficients $k(m-k+1)$ until it reaches $v$, and lowering then spans the whole string. Thus every simple finite-dimensional rank-one module is one of these $V_m$, since it contains such a string. Conversely the displayed formulas directly satisfy the three bracket relations, including both endpoints, so each $V_m$ exists and is simple. Its highest vector has $\Omega$-eigenvalue $m(m+2)$; centrality from step 1.3 makes that its scalar on the entire string. These scalars are distinct for nonnegative integers $m$, since $m(m+2)-n(n+2)=(m-n)(m+n+2)$. [step 1.2, step 1.3, F1, algebra]

3.1 Prove complete reducibility by induction on the dimension of a module $V$. A finite composition series exists by repeatedly taking a proper submodule of maximal dimension; each quotient is simple, and dimensions decrease. Step 2.2 identifies its factors as $V_m$. F1 decomposes $V$ into generalized $\Omega$-eigenspaces. If there is more than one nonzero block, each has smaller dimension and the induction hypothesis proves the result on each. It remains to handle one block with eigenvalue $c$. Every simple factor of it has $c=m(m+2)$, because a power of $\Omega-c$ annihilates that factor. Step 2.2 makes this the same $m$ for all factors. If $V$ itself is simple we are done. Otherwise choose a maximal proper submodule $U$. By induction it is a direct sum of copies of $V_m$, and $V/U\cong V_m$. [step 1.3, step 2.2, F1, algebra]

4.1 In the single-block case of step 3.1, the generalized $h$-weights of $V$ are all among $m,m-2,\ldots,-m$: in a basis adapted to a composition series the characteristic polynomial is the product of those of the factors. Lift the highest vector of $V/U$ to a vector $v$ in generalized $h$-weight $m$. Such a lift exists by decomposing any lift using F1; all other generalized-weight components have zero image in the weight-$m$ line of the quotient. There is no generalized weight $m+2$ or $-m-2$, so step 1.2 gives $ev=0$ and $f^{m+1}v=0$. Also $(h-m)v\in U$ lies in its weight-$m$ space, since $U$ is a direct sum of $V_m$ and $h$ is diagonalizable there. The identity from step 1.2 gives $$0=e f^{m+1}v=(m+1)f^m(h-m)v.$$ On the top weight space of $U$, $f^m$ is injective, as it sends each highest basis vector of a summand $V_m$ to its nonzero bottom vector. Thus $(h-m)v=0$. [step 3.1, step 1.2, F1, algebra]

5.1 The string generated by this $v$ is now a copy of $V_m$ by steps 1.2 and 2.2 and maps nontrivially, hence isomorphically, to $V/U$. Its intersection with $U$ is a proper submodule of that simple string, hence zero, and the surjection to $V/U$ gives $V=U\oplus V_m$. This completes the induction. The formula for $fe$ and $ef$ follows at once by composing the displayed raising/lowering actions, giving the stated strict positivity. The case $m=0$ uses $f^0=\operatorname{id}$ in step 4.1 and is included; the zero module is the empty sum. Every series, interpolation, eigenvector choice and basis lift used was finite, so no AC occurs. [step 1.2, step 2.2, step 3.1, step 4.1, F1, given, algebra] ∎
