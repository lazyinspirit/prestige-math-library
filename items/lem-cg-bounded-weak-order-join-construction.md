---
id: lem-cg-bounded-weak-order-join-construction
kind: lemma
title: "Binary meets, meets of arbitrary nonempty subsets, and joins of bounded subsets in weak order"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps:
  - def-cg-left-right-weak-order-and-descents
  - lem-cg-weak-order-prefix-property-and-left-translation
  - lem-cg-weak-order-is-a-graded-partial-order
  - def-hh-coxeter-matrix-word-group-and-length
  - thm-hh-coxeter-exchange-deletion-and-faithfulness
  - def-cg-canonical-reflection-homomorphism
  - def-cg-geometric-inversion-set
  - def-cg-parabolic-quotient-and-two-sided-minima
justified_by: []
proof_strategy: "maximal common lower bound by Tits exchange and descent induction"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Theorem 3.2.1 with proof, printed pp. 70-71 (binary meets; meets of arbitrary nonempty sets; joins of bounded sets as the meet of the upper bounds)"
    - title: "Nathan Reading and David E. Speyer, Cambrian fans (J. Eur. Math. Soc. 11 (2009) 407-447; arXiv:math/0606201v2)"
      url: "https://arxiv.org/pdf/math/0606201v2"
      locator: "Section 2, arXiv p. 6 (finite-Coxeter-group weak-order meet/join results; corroborative only for finite cases)"
---

## Statement

Let $(S,m)$ be a finite Coxeter matrix, $W$ the presented group with length
$\ell$, descent sets $D_L,D_R$, weak orders $\le_R,\le_L$ and intervals as in
[[def-cg-left-right-weak-order-and-descents]], so that $\le_R$ is a graded
partial order by [[lem-cg-weak-order-is-a-graded-partial-order]]. Then:

**(1) Binary meets.** For all $x,y\in W$ the set
$E(x,y):=[1,x]_R\cap[1,y]_R$ of common lower bounds is finite, and each
element of $E(x,y)$ of maximal length is the meet $x\wedge y$; in particular
$x\wedge y$ exists, and $x\wedge y=1$ if and only if $E(x,y)=\{1\}$.

**(2) Meets of nonempty subsets.** Every nonempty subset $A\subseteq W$ has a
meet $\bigwedge A$. Explicitly, if $x_0\in A$ and one repeatedly replaces a
current candidate $x_i$ by $x_{i+1}:=x_i\wedge y_i$ for some $y_i\in A$ with
$x_i\not\le_R y_i$, then the lengths $\ell(x_i)$ strictly decrease, so the
procedure stops after at most $\ell(x_0)$ replacements at a candidate
$x_i\le_R y$ for all $y\in A$, and this candidate is $\bigwedge A$; only
finitely many choices are made.

**(3) Joins of bounded subsets.** If a nonempty subset $A\subseteq W$ is
bounded above in $\le_R$, then its set $U(A)$ of upper bounds is nonempty and

$$\bigvee A=\bigwedge U(A),$$

the least upper bound of $A$. The analogous statements hold in $\le_L$, and
inversion exchanges the two. No Choice is used.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$ with presented group $W$, length function $\ell$, descent sets $D_L,D_R$, weak orders $\le_R,\le_L$ and intervals as in [[def-cg-left-right-weak-order-and-descents]]; subsets $A\subseteq W$ and elements $u,w,x,y,z,x_0,\dots\in W$ and $s\in S$ as specified in each clause.

[F1] [[def-cg-left-right-weak-order-and-descents]] (1): $u\le_R v$ iff $v=ux$ with $\ell(v)=\ell(u)+\ell(x)$, and $u\le_L v$ iff $v=xu$ with the same length-additive condition; inversion exchanges the two relations.

[F2] [[lem-cg-weak-order-prefix-property-and-left-translation]] (1): the length identity $u\le_R v\iff\ell(v)=\ell(u)+\ell(u^{-1}v)$ and the resulting monotonicity of length along either weak order.

[F3] [[lem-cg-weak-order-is-a-graded-partial-order]] (1): both weak orders are partial orders with minimum $1$; comparable elements of equal length coincide; and inversion is an order isomorphism between the two weak orders.

[F4] [[def-hh-coxeter-matrix-word-group-and-length]]: for $w\in W$, $\ell(w)=\min\{k\in\mathbb{N}:\text{there exist }s_1,\dots,s_k\in S\text{ with }w=s_1\cdots s_k\}$.

[F5] [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (2), Tits exchange: if $w=s_1\cdots s_k$ is reduced and $\ell(sw)=k-1$, then $sw=s_1\cdots\widehat{s_i}\cdots s_k$ for some $i$.

[F6] [[def-cg-geometric-inversion-set]] (1),(2): $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$, and for $u\in W$, $s\in S$, $\ell(us)>\ell(u)$ implies $N(us)=\{e_s\}\sqcup sN(u)$ while $\ell(us)<\ell(u)$ implies $N(us)=s(N(u)\setminus\{e_s\})$.

[F7] [[def-cg-parabolic-quotient-and-two-sided-minima]] (2): $D_L(w)=\{s\in S:\ell(sw)<\ell(w)\}$ and $D_R(w)=\{s\in S:\ell(ws)<\ell(w)\}$; both left and right multiplication by a simple generator change length by exactly $1$ or $-1$.

[F8] [[def-hh-coxeter-matrix-word-group-and-length]]: each simple generator $s\in S$ satisfies $s^2=1$ in $W$.

[F9] [[lem-cg-weak-order-prefix-property-and-left-translation]] (2): the reduced-word prefix property: if $u\le_R v$, some reduced expression of $v$ has a reduced expression of $u$ as its initial segment.

[F10] [[lem-cg-weak-order-prefix-property-and-left-translation]] (3): for $s\in D_L(u)\cap D_L(v)$, $u\le_R v\iff su\le_R sv$.

[F11] [[def-cg-canonical-reflection-homomorphism]] (1): $\rho:W\to \mathrm{GL}(V)$ is a group homomorphism, so $\rho(s)^2=I_V$ follows from $s^2=1$.

[F12] [[def-cg-left-right-weak-order-and-descents]] (2): the intervals $[u,v]_R=\{w:u\le_R w\text{ and }w\le_R v\}$ and their left analogues are defined for the two binary relations.

[F13] [[def-cg-left-right-weak-order-and-descents]] (3): a meet is a greatest lower bound and a join is a least upper bound, with the analogous definitions for subsets; such a bound is unique when it exists.

[F14] [[lem-cg-weak-order-is-a-graded-partial-order]] (3): every interval in right weak order is finite.

[F15] [[lem-cg-weak-order-is-a-graded-partial-order]] (4): $u\le_R v\iff N(u^{-1})\subseteq N(v^{-1})$ and $|N(w^{-1})|=|N(w)|=\ell(w)$; applying this cardinality formula to $w^{-1}$ gives $\ell(w^{-1})=\ell(w)$.

[F16] [[lem-cg-weak-order-is-a-graded-partial-order]] (5): $s\in D_L(w)\iff e_s\in N(w^{-1})$.

[A1] Consequences of [F4] used throughout: $\ell(1)=0$ and $\ell(ab)\le\ell(a)+\ell(b)$. Also $\ell(s)=1$ for each $s\in S$: [F7] at $w=1$ gives $\ell(s)=\ell(1)\pm1$, and nonnegative length forces the value $1$.

## Proof

1.1 For all $x,y\in W$ the set $E(x,y)=[1,x]_R\cap[1,y]_R$ is finite: by [F14] the interval $[1,x]_R=\{w:w\le_R x\}$ is finite, and $E(x,y)\subseteq[1,x]_R$ is a subset of a finite set, hence finite; in particular $E(x,y)$ has an element of maximal length. [F12, F14, given, algebra]

1.2 Common atoms: let $z\in E(x,y)$ have maximal length and let $s\in S$ lie in $E(x,y)$; then $s\le_R z$. By [F9], $z\le_R x$ and $z\le_R y$ give reduced expressions $x=zx'$ and $y=zy'$ with $\ell(x)=\ell(z)+\ell(x')$ and $\ell(y)=\ell(z)+\ell(y')$. Suppose, for contradiction, that $\ell(sz)=\ell(z)+1$; by [F7] the only other possibility is $\ell(sz)=\ell(z)-1$, so this is the case to exclude. Since $s\le_R x$, the defining length-additive factorization gives $x=sa$ and $\ell(x)=\ell(s)+\ell(a)$ for some $a$; as $s^2=1$, $a=sx$, and [A1] gives $\ell(x)=1+\ell(sx)$. Thus Tits exchange [F5] applies to the reduced expression $z_{\mathrm{red}}x'_{\mathrm{red}}$ of $x$ and the letter $s$: the element $sx$ is that word with exactly one letter deleted. If the deleted letter lies in $z_{\mathrm{red}}$, then $sx=\widetilde z\,x'$ for the word $\widetilde z$ obtained from $z_{\mathrm{red}}$ by deleting one letter, so $\ell(\widetilde z)\le\ell(z)-1$; cancelling $x'$ on the right in $x=zx'=s\widetilde z\,x'$ gives $z=s\widetilde z$, and $s^2=1$ gives $sz=\widetilde z$, whence $\ell(sz)=\ell(\widetilde z)\le\ell(z)-1$, contradicting $\ell(sz)=\ell(z)+1$. If instead the deleted letter lies in $x'_{\mathrm{red}}$, then $sx=zx''$ for the word $x''$ obtained from $x'_{\mathrm{red}}$ by deleting one letter, so $\ell(x'')\le\ell(x')-1$. Since $z=s(sz)$, $s^2=1$ gives $x=(sz)x''$; therefore $\ell(x)=\ell(z)+\ell(x')\le\ell(sz)+\ell(x'')$ forces $\ell(x'')=\ell(x')-1$. Hence $x=(sz)x''$ is length-additive and $sz\le_R x$ with $\ell(sz)=\ell(z)+1$; the same argument using $y=zy'$ gives $sz\le_R y$. Then $sz\in E(x,y)$ has length larger than the maximal length $\ell(z)$, a contradiction. Hence $\ell(sz)=\ell(z)-1$, that is $s\le_R z$. [F1, F5, F7, F8, F9, A1, given, algebra]

1.3 The remaining assertions of clause (1): if $E(x,y)=\{1\}$ then $1$ is the only common lower bound, hence the greatest one, so $x\wedge y=1$; conversely if $x\wedge y=1$ then every $w\in E(x,y)$ satisfies $w\le_R x\wedge y=1$ with $1\le_R w$, so $w=1$ by antisymmetry, and $E(x,y)=\{1\}$. This completes clause (1). [F3, F12, F13, given, algebra]

2.1 Every $w\in E(x,y)$ satisfies $w\le_R z$ for every $z\in E(x,y)$ of maximal length; hence such a $z$ is the meet $x\wedge y$. We prove the first claim by induction on $\ell(x)+\ell(y)$; the case $w=1$ is the minimum property of $1$, so assume $w\ne1$. Choose a reduced expression $w=sv$ with first letter $s$. Its suffix $v$ must be reduced, since otherwise replacing it by a shorter expression would shorten $w$; hence $\ell(v)=\ell(w)-1$; since $s^2=1$, $sw=v$, and therefore $s\in D_L(w)$ by [F7]. Since $w\le_R x$, the length identity gives $\ell(x)=\ell(w)+\ell(w^{-1}x)$, so $\ell(sx)\le\ell(sw)+\ell(w^{-1}x)=\ell(x)-1$ by subadditivity. The $\pm1$ length change in [F7] forces $\ell(sx)=\ell(x)-1$, hence $s\in D_L(x)$; symmetrically $s\in D_L(y)$. By step 1.2, $s\le_R z$. The length-additive factorization of $z$ by $s$ and $s^2=1$ give $z=s(sz)$ and $\ell(sz)=\ell(z)-1$, so $s\in D_L(z)$ by [F7]. Since $x=z\cdot(z^{-1}x)$ and $z=s(sz)$ are length-additive, $sx=(sz)(z^{-1}x)$ and $\ell(sx)=\ell(x)-1=\ell(sz)+\ell(z^{-1}x)$; hence $sz\le_R sx$ and, symmetrically, $sz\le_R sy$. The induction hypothesis applied to $(sx,sy)$, whose length sum is $\ell(x)+\ell(y)-2$, provides the meet $z':=sx\wedge sy$, and $sz\le_R z'$ by its universal property. Because $s\in D_L(w)\cap D_L(x)$ and $w\le_R x$, [F10] gives $sw\le_R sx$; similarly $sw\le_R sy$, so the meet property gives $sw\le_R z'$. Next, $sz'\le_R x$ and $sz'\le_R y$: from $z'\le_R sx$ the inversion criterion gives $N(z'^{-1})\subseteq N((sx)^{-1})=N(x^{-1}s)$. Since $s\in D_L(x)$, the descent dictionary gives $e_s\in N(x^{-1})$, and [F15] gives $\ell(x^{-1}s)=\ell((sx)^{-1})=\ell(sx)=\ell(x)-1<\ell(x^{-1})$; thus the descent recursion gives $N(x^{-1}s)=s(N(x^{-1})\setminus\{e_s\})$. By [F7] and [F3], $\ell(z'^{-1}s)$ differs from $\ell(z'^{-1})$ by $1$, so one of the two recursions in [F6] gives $N(z'^{-1}s)\subseteq\{e_s\}\cup sN(z'^{-1})$. Applying $\rho(s)$ to $N(z'^{-1})\subseteq s(N(x^{-1})\setminus\{e_s\})$ and using [F11] gives $sN(z'^{-1})\subseteq N(x^{-1})\setminus\{e_s\}$, so $N((sz')^{-1})=N(z'^{-1}s)\subseteq\{e_s\}\cup(N(x^{-1})\setminus\{e_s\})=N(x^{-1})$ because $e_s\in N(x^{-1})$. The inversion criterion gives $sz'\le_R x$, and the same argument gives $sz'\le_R y$. Hence $sz'\in E(x,y)$ and $\ell(sz')\le\ell(z)$ by maximality. If $\ell(sz')=\ell(z')-1$, then $z'=s(sz')$ with additive length, so $s\le_R z'$; transitivity with $z'\le_R sx$ would give $s\le_R sx$. By $s^2=1$ and $\ell(s)=1$, this means $\ell(sx)=\ell(s)+\ell(x)=1+\ell(x)$, contradicting $\ell(sx)=\ell(x)-1$. Thus $\ell(sz')=\ell(z')+1$ and $\ell(z')=\ell(sz')-1\le\ell(z)-1=\ell(sz)\le\ell(z')$, the last inequality from $sz\le_R z'$. Hence $\ell(sz)=\ell(z')$ and the equal-length property in [F3] yields $sz=z'$. We now have $sw\le_R z'=sz$, and $s\in D_L(w)\cap D_L(z)$; [F10] in its reverse direction gives $w\le_R z$, completing the induction. Therefore every element of $E(x,y)$ lies below $z$, while $z\in E(x,y)$; so $z$ is the greatest lower bound $x\wedge y$, and in particular the meet exists and is an element of $E(x,y)$ of maximal length. [F1, F2, F3, F6, F7, F8, F10, F11, F13, F15, F16, A1, step 1.2, given, algebra]

3.1 Meets of nonempty subsets: let $A\ne\emptyset$ and $x_0\in A$. We run the procedure of the statement and verify its invariants. If $u$ is a lower bound of $A$ and $u\le_R x_i$, and $x_{i+1}=x_i\wedge y_i$ with $y_i\in A$, then $u\le_R x_i$ and $u\le_R y_i$ (the latter because $u$ is a lower bound of $A$), so $u\le_R x_{i+1}$ by the universal property of the meet; the invariant "every lower bound of $A$ is below the current candidate" therefore persists from $x_0$, which satisfies it because $x_0\in A$. Each replacement gives $x_{i+1}=x_i\wedge y_i\le_R x_i$ and $x_{i+1}\ne x_i$ (else $x_i\le_R y_i$, contrary to the choice of $y_i$), so $\ell(x_{i+1})<\ell(x_i)$ by the equal-length property of [F3]; as $\ell$ takes values in $\mathbb{N}$ by [F4], the procedure stops after at most $\ell(x_0)$ replacements. At a stopping stage $x_i\le_R y$ for all $y\in A$, so $x_i$ is a lower bound of $A$; and every lower bound $u$ of $A$ satisfies $u\le_R x_i$ by the invariant, so $x_i$ is the greatest lower bound $\bigwedge A$. At each nonstopping stage, failure of $x_i\le_R y$ for all $y\in A$ supplies a witness $y_i\in A$. The strictly decreasing natural lengths bound the recursion by $\ell(x_0)$ updates, so it selects at most $\ell(x_0)+1$ elements including $x_0$; this finite recursion uses no Axiom of Choice, and each meet $x_i\wedge y_i$ is uniquely determined. [F1, F3, F4, F13, A1, step 2.1, step 1.3, given, algebra]

4.1 Joins of bounded subsets: let $A\ne\emptyset$ be bounded above in $\le_R$, so that its set of upper bounds $U(A)$ is nonempty. By step 3.1 the meet $z:=\bigwedge U(A)$ exists. For every $a\in A$ and every $u\in U(A)$ one has $a\le_R u$, so each $a\in A$ is a lower bound of $U(A)$ and therefore $a\le_R z$; hence $z$ is an upper bound of $A$. If $u$ is any upper bound of $A$, then $u\in U(A)$ and $z\le_R u$ because $z$ is the greatest lower bound of $U(A)$. Therefore $z$ is the least upper bound $\bigvee A$. [F1, F13, step 3.1, given, algebra]

5.1 The left-order statements follow by inversion: the map $w\mapsto w^{-1}$ is an order isomorphism $(W,\le_R)\to(W,\le_L)$, so it carries $E(x,y)$, $U(A)$ and every universal bound property for $\le_R$ into the corresponding objects for $\le_L$; explicitly, meets in $\le_L$ are the inverses of meets in $\le_R$ of the inverted sets. No Choice was used anywhere in this proof. [F1, F3, F13, step 2.1, step 3.1, step 4.1, given, algebra] ∎
