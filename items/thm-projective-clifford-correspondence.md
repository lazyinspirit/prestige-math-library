---
id: thm-projective-clifford-correspondence
kind: theorem
title: "The projective Clifford correspondence for an invariant irreducible representation"
status: draft
origin: pipeline
deps: ["lem-invariant-irrep-produces-a-projective-inertia-extension", "lem-projective-representations-are-twisted-group-algebra-modules", "lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces", "thm-clifford-correspondence", "lem-inducing-an-irreducible-inertia-module-is-irreducible", "lem-induction-from-the-inertia-group-recovers-the-module", "thm-gallagher-correspondence-for-an-extendible-character", "def-projective-representation-and-factor-set", "def-extension-of-an-irreducible-normal-subgroup-representation", "thm-extension-exists-iff-the-clifford-obstruction-vanishes", "def-conjugate-representation-and-inertia-group", "thm-clifford-homogeneous-restriction-formula"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.12 and Corollary 1.13, printed pp. 4–5"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Tammo tom Dieck, Representation Theory — §(4.2.4)–(4.2.7), printed pp. 56–57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
proof_strategy: direct
---

## Statement

Let $N\trianglelefteq G$ be finite groups, let $\rho:N\to\operatorname{GL}(S)$
be an irreducible representation on a nonzero finite-dimensional complex space
$S$ with character $\theta$, let $I=I_G(\theta)$ be the inertia group and
$Q=I/N$, and fix projective inertia operators $P$ for $\rho$ with quotient
factor set $\alpha$ as in
[[lem-invariant-irrep-produces-a-projective-inertia-extension]]. Then
$$U\longmapsto M=\operatorname{Hom}_N(S,U),\qquad M(iN)f:=U(i)\,f\,P(i)^{-1},$$
is a bijection from the isomorphism classes of irreducible representations $U$
of $I$ whose restriction to $N$ contains $\rho$ onto the isomorphism classes of
irreducible projective representations $M$ of $Q$ with factor set
$\alpha^{-1}$; the inverse is
$$M\longmapsto U=S\otimes_{\mathbb C}M,\qquad i\cdot(s\otimes m):=P(i)s\otimes M(iN)m,$$
so that
$U\cong S\otimes M$ as $I$-modules. Composing with induction from $I$ to $G$
yields a bijection onto $\operatorname{Irr}(G\mid\theta)$, and taking one
representative $\theta$ from each $G$-orbit in $\operatorname{Irr}(N)$ accounts
for all of $\operatorname{Irr}(G)$. If $I=N$ the quotient contributes its unique
trivial module; if $\alpha$ is trivializable, so that $\rho$ extends to $I$, the
statement reduces to Gallagher's correspondence.

## Facts & Assumptions

**Given:** Finite groups $N\trianglelefteq G$, an irreducible finite-dimensional complex representation $\rho:N\to\operatorname{GL}(S)$ with $S\ne0$, its character $\theta$, the inertia group $I=I_G(\theta)$, the quotient $Q=I/N$, and projective inertia operators $P$ with $P(1)=\operatorname{id}_S$, $P(n)=\rho(n)$, $P(ni)=\rho(n)P(i)$, $P(in)=P(i)\rho(n)$ and $P(i)P(j)=\alpha(iN,jN)P(ij)$ for the normalized two-cocycle $\alpha$ on $Q$.

[F1] Such operators $P$ exist, and $I\le G$ contains $N$. ([[lem-invariant-irrep-produces-a-projective-inertia-extension]], [[def-conjugate-representation-and-inertia-group]]).

[F2] For $N\le H\le G$ one writes $\operatorname{Irr}(H\mid\theta)=\{\psi\in\operatorname{Irr}(H):\theta\text{ occurs in }\operatorname{Res}_N^H\psi\}$. ([[def-conjugate-representation-and-inertia-group]]).

[F3] A normalized projective representation of $Q$ with factor set $\beta$ is a map $M:Q\to\operatorname{GL}(V)$ with $M(1)=\operatorname{id}_V$ and $M(q)M(r)=\beta(q,r)M(qr)$; it is irreducible when its only invariant subspaces are $0$ and $V$. ([[def-projective-representation-and-factor-set]]).

[F4] Nonzero finite-dimensional left $\mathbb C^\beta[Q]$-modules are precisely the normalized projective $Q$-representations with factor set $\beta$, with the same invariant subspaces. ([[lem-projective-representations-are-twisted-group-algebra-modules]]).

[F5] A theorem on homogeneous restrictions: for $\theta\in\operatorname{Irr}(N)$ and $\chi\in\operatorname{Irr}(G\mid\theta)$ with $I=I_G(\theta)$ there is $e\ge1$ with $\operatorname{Res}_N^G\chi=e\sum_{gI\in G/I}{}^g\theta$; in particular the entire restriction is isotypical precisely when $I=G$. ([[thm-clifford-homogeneous-restriction-formula]]).

[F6] Let $S$ be an irreducible complex $N$-module with character $\theta$ and $U$ a finite-dimensional $\theta$-isotypical $N$-module, possibly zero. Put $M=\operatorname{Hom}_N(S,U)$ with trivial $N$-action. Evaluation $E_U:S\otimes_{\mathbb C}M\to U$, $s\otimes f\mapsto f(s)$, is an $N$-isomorphism, every $N$-submodule $U_0\subseteq U$ is $E_U(S\otimes M_0)$ for the unique subspace $M_0=\operatorname{Hom}_N(S,U_0)\subseteq M$, and every $N$-map $U\to U'$ is uniquely $E_{U'}(1_S\otimes a)E_U^{-1}$ for a linear $a:M\to M'$, these identifications preserving composition. ([[lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces]]).

[F7] Induction from the inertia group gives a bijection $\operatorname{Irr}(I\mid\theta)\to\operatorname{Irr}(G\mid\theta)$; on module isomorphism classes the inverse takes the $\theta$-isotypical component, and conjugate normal types give the same target set, the sets $\operatorname{Irr}(G\mid\theta)$ over distinct $G$-orbits partitioning $\operatorname{Irr}(G)$. ([[thm-clifford-correspondence]]).

[F8] If $W$ is an irreducible complex $I$-module lying over $\theta$, then $W|_N$ is $\theta$-isotypical and $X=\operatorname{Ind}_I^G W$ is irreducible, its $\theta$-isotypical component being the identity-coset copy of $W$. Also, if $V$ is an irreducible complex $G$-module whose restriction contains $\theta$ and $W=V_\theta$, then $W$ is irreducible as an $I$-module and the canonical map $\operatorname{Ind}_I^G W\to V$ is a $G$-isomorphism. ([[lem-inducing-an-irreducible-inertia-module-is-irreducible]], [[lem-induction-from-the-inertia-group-recovers-the-module]]).

[F9] If a representation $S$ affording $\theta$ has a fixed extension $\widetilde S$ to $I$, then $\operatorname{Irr}(I/N)\to\operatorname{Irr}(I\mid\theta)$, $\eta\mapsto\chi_{\widetilde S}\operatorname{Inf}_{I/N}^I\eta$, is a bijection, and composing with induction gives a bijection onto $\operatorname{Irr}(G\mid\theta)$ with ramification index $\eta(1)$ over $\theta$. ([[thm-gallagher-correspondence-for-an-extendible-character]]).

[F10] $\rho$ extends to a representation of $I$ if and only if its Clifford obstruction class in $H^2(Q,\mathbb C^\times)$ is zero. ([[thm-extension-exists-iff-the-clifford-obstruction-vanishes]]).

[A1] For $\mathbb C$-linear maps, composition is associative and scalar multiples commute with composition; $S\otimes_{\mathbb C}M_0\subseteq S\otimes_{\mathbb C}M$ for a subspace $M_0\subseteq M$, and $M_0\mapsto S\otimes M_0$ is injective on subspaces.

## Proof

**Proof technique:** direct.

1.1 Let $U$ be an irreducible complex $I$-module with $U\in\operatorname{Irr}(I\mid\theta)$, so $\theta$ occurs in $U|_N$ by [F2]. Since $I_I(\theta)=I$, [F5] shows that $U|_N$ is $\theta$-isotypical, so $U$ is a finite-dimensional $\theta$-isotypical $N$-module with $U\ne0$; put $M:=\operatorname{Hom}_N(S,U)$ with the trivial $N$-action, a finite-dimensional space that is nonzero because $\theta$ occurs in $U|_N$ and $U|_N$ is isotypical, so that the multiplicity space of [F6] does not vanish. [F2, F5, F6, given]

2.1 For $i\in I$ define $M(i):M\to M$ by $(M(i)f)(s):=U(i)f(P(i)^{-1}s)$. This is $\mathbb C$-linear and has image in $\operatorname{Hom}_N(S,U)$: for $m\in N$, $(M(i)f)(\rho(m)s)=U(i)f(P(i)^{-1}\rho(m)s)=U(i)f(\rho(i^{-1}mi)P(i)^{-1}s)=U(i)U(i^{-1}mi)f(P(i)^{-1}s)=U(m)U(i)f(P(i)^{-1}s)=U(m)(M(i)f)(s)$, using $P(i)^{-1}\rho(m)=\rho(i^{-1}mi)P(i)^{-1}$ from the identities of [F1] and $f\in\operatorname{Hom}_N(S,U)$. [F1, step 1.1, algebra]

3.1 The operators $M(i)$ depend only on the coset $iN$ and $M(n)=\operatorname{id}_M$ for $n\in N$. Indeed $(M(n)f)(s)=U(n)f(\rho(n)^{-1}s)=U(n)U(n)^{-1}f(s)=f(s)$ because $f$ is $N$-linear; and for $i\in I$, $n\in N$ the identities $P(in)=P(i)\rho(n)$ and $P(ni)=\rho(n)P(i)$ of [F1] give $(M(in)f)(s)=U(i)U(n)f(\rho(n)^{-1}P(i)^{-1}s)=U(i)f(P(i)^{-1}s)=(M(i)f)(s)$, while $(M(ni)f)(s)=U(n)U(i)f(P(i)^{-1}\rho(n)^{-1}s)=U(n)U(i)U(i^{-1}n^{-1}i)f(P(i)^{-1}s)=U(i)f(P(i)^{-1}s)=(M(i)f)(s)$. Hence $M$ descends to a well-defined map $M:Q\to\operatorname{End}_{\mathbb C}(M)$, written $M(q):=M(i)$ for any $i\in I$ with $iN=q$. [F1, step 2.1, algebra]

3.2 For all $i,j\in I$ one has $M(i)M(j)=\alpha(iN,jN)^{-1}M(ij)$: indeed $(M(i)M(j)f)(s)=U(i)(M(j)f)(P(i)^{-1}s)=U(i)U(j)f(P(j)^{-1}P(i)^{-1}s)=U(i)U(j)f((P(i)P(j))^{-1}s)$, and $P(i)P(j)=\alpha(iN,jN)P(ij)$ by [F1], so $(P(i)P(j))^{-1}=\alpha(iN,jN)^{-1}P(ij)^{-1}$ and the last expression equals $\alpha(iN,jN)^{-1}U(ij)f(P(ij)^{-1}s)=\alpha(iN,jN)^{-1}(M(ij)f)(s)$. [F1, step 2.1, algebra]

3.3 The evaluation $E_U:S\otimes_{\mathbb C}M\to U$, $E_U(s\otimes f)=f(s)$, is an $I$-isomorphism: it is an $N$-isomorphism by [F6] applied to the $\theta$-isotypical module $U$ of step 1.1, and it is $I$-equivariant because $E_U\bigl(P(i)s\otimes M(i)f\bigr)=(M(i)f)(P(i)s)=U(i)f(P(i)^{-1}P(i)s)=U(i)E_U(s\otimes f)$ for all $i\in I$. [F6, step 1.1, step 2.1]

4.1 By step 3.1 and the identities of [F1], $M(1)=M(N)=\operatorname{id}_M$, and every $M(i)$ is invertible: from step 3.2 with $j=i^{-1}$ one gets $M(i)M(i^{-1})=\alpha(iN,i^{-1}N)^{-1}M(1)=\alpha(iN,i^{-1}N)^{-1}\operatorname{id}_M$, and symmetrically $M(i^{-1})M(i)=\alpha(i^{-1}N,iN)^{-1}\operatorname{id}_M$, so $M(i)^{-1}=\alpha(iN,i^{-1}N)M(i^{-1})$. [F1, step 3.1, step 3.2]

5.1 A subspace $M_0\subseteq M$ is $M$-stable, that is $M(q)M_0\subseteq M_0$ for all $q\in Q$, if and only if $E_U(S\otimes M_0)$ is an $I$-submodule of $U$. If $M(q)M_0\subseteq M_0$ for all $q$, then for $i\in I$ one has $i\cdot E_U(S\otimes M_0)=E_U\bigl(P(i)S\otimes M(i)M_0\bigr)=E_U(S\otimes M(i)M_0)\subseteq E_U(S\otimes M_0)$ by step 3.3. Conversely, if $U_0\subseteq U$ is an $I$-submodule, then $U_0$ is an $N$-submodule of the $\theta$-isotypical module $U$, so $U_0=E_U(S\otimes M_0)$ for the unique $M_0=\operatorname{Hom}_N(S,U_0)\subseteq M$ by [F6]; for $f\in M_0$ the element $M(i)f$ has image $U(i)f(S)\subseteq U(i)U_0\subseteq U_0$, so $M(i)M_0\subseteq M_0$. Since $M_0\mapsto S\otimes M_0$ is injective and $\dim E_U(S\otimes M_0)=\dim S\cdot\dim M_0$, these two assignments are mutually inverse bijections between the $M$-stable subspaces of $M$ and the $I$-submodules of $U$; hence $U$ is irreducible if and only if $M$ is, and then $M$ is an irreducible projective $Q$-representation with factor set $\alpha^{-1}$ by steps 3.2 and 4.1 and definition [F3], equivalently an irreducible left $\mathbb C^{\alpha^{-1}}[Q]$-module with the same invariant subspaces by [F4]. [F3, F4, F6, step 3.3, step 4.1, A1]

6.1 Conversely let $M:Q\to\operatorname{GL}(M_0)$ be an irreducible projective $Q$-representation with factor set $\alpha^{-1}$ on a nonzero finite-dimensional space $M_0$, and put $U:=S\otimes_{\mathbb C}M_0$ with $i\cdot(s\otimes m):=P(i)s\otimes M(iN)m$. This is a well-defined $I$-action: it is bilinear, $1$ acts as $\operatorname{id}$ by [F1], and $i\cdot(j\cdot(s\otimes m))=P(i)P(j)s\otimes M(iN)M(jN)m=\alpha(iN,jN)P(ij)s\otimes\alpha(iN,jN)^{-1}M(ijN)m=(ij)\cdot(s\otimes m)$ by the defining relations of $P$ and $M$. Since $M(n)=\operatorname{id}$, the restriction to $N$ is $n\cdot(s\otimes m)=\rho(n)s\otimes m$, so $U|_N\cong(\dim M_0)\cdot\rho$ and $U$ is a $\theta$-isotypical $N$-module lying over $\theta$. Finally $U$ is irreducible: by [F6] every $N$-submodule $U_0\subseteq U$ is $E_U(S\otimes M_1)$ for a unique $M_1=\operatorname{Hom}_N(S,U_0)\subseteq M_0$, and if $U_0$ is $I$-stable then $M(iN)M_1\subseteq M_1$ for all $i$ by the computation of step 5.1, so $M_1=0$ or $M_1=M_0$ by irreducibility of $M$, whence $U_0=0$ or $U_0=U$. [F1, F3, F6, step 5.1, A1]

7.1 The two constructions are inverse on isomorphism classes. Starting from $U$, forming $M=\operatorname{Hom}_N(S,U)$ and then $S\otimes M$ with the action of step 6.1, the evaluation $E_U$ is an $I$-isomorphism by step 3.3, so $S\otimes M\cong U$. Starting from $M_0$, forming $U=S\otimes M_0$ and then $\operatorname{Hom}_N(S,U)$, the $N$-maps $s\mapsto s\otimes m$ identify $\operatorname{Hom}_N(S,U)$ with $M_0$ by [F6], and the induced operator sends $f_m$ to $f_{M(iN)m}$ because $\bigl(M'(iN)f_m\bigr)(s)=U(i)f_m(P(i)^{-1}s)=P(i)P(i)^{-1}s\otimes M(iN)m=s\otimes M(iN)m$; so the isomorphism classes correspond. Both assignments send isomorphisms to isomorphisms, since an $I$-isomorphism $U\to U'$ restricts to an isomorphism $\operatorname{Hom}_N(S,U)\to\operatorname{Hom}_N(S,U')$ and a $Q$-isomorphism $M_0\to M_0'$ induces $S\otimes M_0\to S\otimes M_0'$, and the constructions of steps 5.1 and 6.1 preserve irreducibility in both directions; hence $U\mapsto M$ is a bijection from the isomorphism classes of irreducible $I$-modules lying over $\theta$ onto those of irreducible projective $Q$-representations with factor set $\alpha^{-1}$. [F6, step 3.3, step 5.1, step 6.1, A1]

8.1 Composing the bijection of step 7.1 with induction to $G$ gives the required bijection onto $\operatorname{Irr}(G\mid\theta)$: by [F7] induction is a bijection $\operatorname{Irr}(I\mid\theta)\to\operatorname{Irr}(G\mid\theta)$ whose inverse takes the $\theta$-isotypical component, and [F8] identifies that inverse explicitly through the irreducible $I$-module $W=V_\theta$ and the canonical isomorphism $\operatorname{Ind}_I^G W\to V$. Moreover, for a fixed $G$-orbit of $\operatorname{Irr}(N)$ the target set $\operatorname{Irr}(G\mid\theta)$ is the same for every representative $\theta$ of the orbit, and the sets belonging to distinct orbits partition $\operatorname{Irr}(G)$ by [F7]; so choosing one $\theta$ per orbit lists every irreducible $G$-representation exactly once. [F7, F8, step 7.1]

9.1 Two degenerate cases match the statement. If $I=N$, then $Q$ is the trivial group, the only normalized two-cocycle on it is the constant function $1$, the only irreducible projective $Q$-representation is the trivial one-dimensional module, and the construction of step 6.1 returns $M_0=\mathbb C$ with $U=S\otimes\mathbb C\cong S$ and $i\cdot(s\otimes m)=\rho(i)s\otimes m$ for $i\in N$, so $\operatorname{Irr}(I\mid\rho)=\{\theta\}$: the quotient contributes its unique trivial module. If instead $\alpha$ is trivializable, then $\rho$ extends to $I$ by [F10]; choosing the operators $P$ to be such an extension $\widetilde S$ gives $\alpha=1$, so step 3.2 makes $M$ an ordinary representation of $Q=I/N$ and the $I$-action of step 6.1 is $i\cdot(s\otimes m)=\widetilde S(i)s\otimes M(iN)m$, whose character is $\chi_{\widetilde S}\operatorname{Inf}_{I/N}^I\chi_M$, exactly the parametrization of [F9]; thus the theorem reduces to Gallagher's correspondence in the extendible case, and only the nonvanishing of the obstruction makes the projective version necessary. [F9, F10, step 3.2, step 6.1, step 8.1]

10.1 Steps 7.1 and 8.1 establish the bijection from the irreducible projective $Q$-representations with factor set $\alpha^{-1}$ to $\operatorname{Irr}(I\mid\rho)$ given by $M\mapsto S\otimes M$ and $U\mapsto\operatorname{Hom}_N(S,U)$, and its composition with induction onto $\operatorname{Irr}(G\mid\theta)$, with the orbit bookkeeping for $\theta$; step 9.1 disposes of the cases $I=N$ and $\alpha$ trivializable. This is precisely the correspondence asserted, valid for the nonsplit case in which the Clifford obstruction is nonzero. [step 7.1, step 8.1, step 9.1] ∎
