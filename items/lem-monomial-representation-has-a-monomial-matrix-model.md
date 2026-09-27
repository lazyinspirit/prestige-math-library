---
id: lem-monomial-representation-has-a-monomial-matrix-model
kind: lemma
title: "A coset basis makes a monomial representation monomial matrices"
status: draft
origin: pipeline
deps: [def-monomial-representation-and-m-group, prop-induced-module-decomposes-over-a-left-transversal, def-induced-r-linear-g-module-by-h-covariant-functions, def-subrepresentation-and-irreducible-representation, def-coset]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — §4.3, printed pp. 57–58"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Wen-Wei Li, Yanqi Lake Lectures on Algebra I — Definition 12.5.1 and the discussion of monomial matrices, printed p. 146"
      url: "https://www.wwli.asia/downloads/YAlg1.pdf"
---

## Statement

Let $G$ be a finite group, $H\le G$, and $\lambda:H\to\mathbb C^\times$ a
linear character. Fix a left transversal $T=\{t_1,\dots,t_n\}$ of $H$ in $G$.

1. $\operatorname{Ind}_H^G\lambda$ has a basis $f_1,\dots,f_n$ indexed by $T$
   (equivalently, by the left cosets $G/H$), and for every $x\in G$ the matrix
   of $x$ in that basis is monomial: it has exactly one nonzero entry in each
   row and exactly one nonzero entry in each column, each of them a value of
   $\lambda$.

2. Conversely, suppose $V$ is an irreducible finite-dimensional complex
   $G$-representation with a basis $v_1,\dots,v_r$ such that every $x\in G$
   permutes the lines $\mathbb C v_i$ and acts on each of them by a scalar,
   that is $x\cdot v_i=c_i(x)v_{\sigma_x(i)}$ with $c_i(x)\in\mathbb C^\times$
   and $\sigma_x$ a permutation of $\{1,\dots,r\}$. Let $H=\{x\in G:
   x\cdot\mathbb C v_1=\mathbb C v_1\}$ be the stabilizer of the line
   $\mathbb C v_1$, with its linear character $\lambda$. Then $H\le G$ and
   $V\cong\operatorname{Ind}_H^G\lambda$. In particular such a $V$ is
   monomial.

## Facts & Assumptions

**Given:** For claim 1, a finite group $G$, a subgroup $H\le G$, a linear character $\lambda:H\to\mathbb C^\times$, and a left transversal $T=\{t_1,\dots,t_n\}$ meeting every left coset $gH$ in exactly one point. For claim 2, an irreducible finite-dimensional complex $G$-representation $V$ with a basis $v_1,\dots,v_r$ which every $x\in G$ permutes up to nonzero scalars.

[F1] $\operatorname{Ind}_H^G W=\{\,f:G\to W:f(gh)=h^{-1}\cdot f(g)\ \text{for all }g\in G,h\in H\,\}$ for a complex $H$-module $W$, with module structure pointwise and $(x\cdot f)(g)=f(x^{-1}g)$. ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F2] Evaluation on $T$ gives a $\mathbb C$-linear isomorphism $\operatorname{ev}_T:\operatorname{Ind}_H^G W\to\bigoplus_{i=1}^n W$, $f\mapsto(f(t_1),\dots,f(t_n))$, and $n=[G:H]$. ([[prop-induced-module-decomposes-over-a-left-transversal]]).

[F3] A left coset is $gH=\{gh:h\in H\}$ ([[def-coset]]). Every $g$ belongs to $gH$, and if $gh=g\prime h\prime$, then $g\prime=g h(h\prime)^{-1}$, so $gH=g\prime H$. Thus left cosets partition $G$; since $T$ meets each coset once, $tH=t\prime H$ for $t,t\prime\in T$ holds exactly when $t=t\prime$.

[F4] $V$ is irreducible when $V\ne0$ and $0$ and $V$ are its only $G$-invariant subspaces. ([[def-subrepresentation-and-irreducible-representation]]).

[F5] $\lambda$ is a linear character of $H$, so the one-dimensional $H$-module $\mathbb C_\lambda$ is $\mathbb C$ with $h\cdot z=\lambda(h)z$, and $\operatorname{Ind}_H^G\lambda$ denotes $\operatorname{Ind}_H^G\mathbb C_\lambda$. ([[def-monomial-representation-and-m-group]]).

[A1] Left multiplication by a fixed $x\in G$ maps left cosets bijectively to left cosets: $x(gH)=(xg)H$, and $gH=g'H$ implies $xgH=xg'H$.

## Proof

**Proof technique:** direct.

The symbols $H$ and $\lambda$ are local to each claim: in claim 1 they are the given subgroup and character, and in claim 2 they are the line stabilizer and its character from step 1.2. The transversal $T$ is used only for claim 1.

1.1 For $t\in T$ define $f_t:G\to\mathbb C$ by $f_t(th'):=\lambda(h')^{-1}$ for $h'\in H$, and $f_t(g):=0$ for $g\notin tH$. This is well defined because a decomposition $g=th'$ with $t\in T$, $h'\in H$ is unique ([F3]), and $f_t$ lies in $\operatorname{Ind}_H^G\mathbb C_\lambda$: for $g=th'$ and $h\in H$ one has $gh=t(h'h)$ and $\lambda(h'h)^{-1}=\lambda(h)^{-1}\lambda(h')^{-1}$, while for $g\notin tH$ also $gh\notin tH$ and both sides vanish. [F1, F3, F5, construct]

1.2 For claim 2 put $L:=\mathbb C v_1$ and $H:=\{x\in G:x\cdot L=L\}$. This $H$ is a subgroup of $G$ containing $1$, and each $x\in H$ acts on the line $L$ by a nonzero scalar; writing $x\cdot z=\lambda(x)z$ for $z\in L$ defines a group homomorphism $\lambda:H\to\mathbb C^\times$, because the action of $G$ on $V$ is a group action. Thus $\lambda$ is a linear character of $H$ and $L$ is a one-dimensional $H$-module. [given, algebra]

1.3 For claim 2 let $W$ be the span of all lines $x\cdot L=\mathbb C\,(x\cdot v_1)$ with $x\in G$. Each spanning line is one of the basis lines $\mathbb C v_i$, because the action permutes the basis lines, so $W\subseteq V$; and $W$ is $G$-invariant with $W\ne0$, since $y\cdot(x\cdot L)=(yx)\cdot L$ and $L\subseteq W$. Irreducibility of $V$ forces $W=V$, so every basis line equals some $x\cdot L$ and the distinct lines $x\cdot L$, $x\in G$, are exactly the $r$ basis lines. [F4, given]

2.1 The function $f_t$ of step 1.1 takes the value $1$ at $t$ and the value $0$ at every other element of $T$; hence $\operatorname{ev}_T(f_{t_i})$ is the $i$-th standard basis vector of $\bigoplus_{i=1}^n\mathbb C_\lambda$. By [F2] the map $\operatorname{ev}_T$ is an isomorphism, so $f_1,\dots,f_n$ is a basis of $\operatorname{Ind}_H^G\lambda$ and $n=[G:H]$. [F2, step 1.1]

2.2 Fix $x\in G$ and $t\in T$. By [A1] there are unique $t'\in T$ and $h\in H$ with $xt=t'h$. For $s\in T$ the value $(x\cdot f_t)(s)=f_t(x^{-1}s)$ is nonzero exactly when $x^{-1}s\in tH$, that is $s\in xtH=t'H$, hence exactly when $s=t'$. At that point $x^{-1}t'=th^{-1}$ by the relation $xt=t'h$, so $(x\cdot f_t)(t')=f_t(th^{-1})=\lambda(h^{-1})^{-1}=\lambda(h)\ne0$. [F1, step 1.1, algebra]

2.3 For claim 2 choose a left transversal $S$ of the stabilizer $H$ from step 1.2. Such an $S$ exists by choosing one representative from each of the finitely many nonempty cosets in the finite group $G$; no axiom of choice is needed. The coset argument in [F3] applies to this $H$ and $S$. The map $S\to\{x\cdot L:x\in G\}$, $t\mapsto t\cdot L$, is a well-defined bijection: it is well defined because $th\cdot L=t\cdot L$ for $h\in H$; it is injective because $t\cdot L=t'\cdot L$ gives $t'^{-1}t\cdot L=L$, that is $t'^{-1}t\in H$, hence $t'=t$ by [F3]; and it is surjective because every $x\in G$ can be written $x=th$ with $t\in S$, $h\in H$, giving $x\cdot L=t\cdot L$. By step 1.3 the translates $L_t:=t\cdot L$, $t\in S$, are exactly the basis lines, and $V=\bigoplus_{t\in S}L_t$, each $u\in V$ having a unique expression $u=\sum_{t\in S}t\cdot u_t$ with $u_t\in L$. [F3, step 1.3, algebra]

3.1 Thus the matrix of $x$ in the basis $f_1,\dots,f_n$ has its only possibly nonzero entry in the column indexed by $t$ at the row indexed by $t'$, where $xt\in t'H$, and that entry equals $\lambda(h)\ne0$. The map $t\mapsto t'$ is a permutation of $T$ by [A1], so every row also receives exactly one nonzero entry, namely from the unique $t$ with $xt\in t'H$. Hence the matrix is monomial with nonzero entries among the values of $\lambda$, which proves claim 1. [A1, step 2.1, step 2.2]

3.2 Define $\Psi:V\to\operatorname{Ind}_H^G L$ by $\Psi(v)(th):=h^{-1}\cdot u_t$ for $t\in S$, $h\in H$, where $v=\sum_{t\in S}t\cdot u_t$ is the unique expression of step 2.3. This is well defined by [F3], it satisfies the covariance law $\Psi(v)(gh')=h'^{-1}\cdot\Psi(v)(g)$ for $g=th$, $h'\in H$, and so lies in $\operatorname{Ind}_H^G L$ as in [F1]; the assignment $\Psi$ is $\mathbb C$-linear because the coordinates $u_t$ depend linearly on $v$. [F1, F3, step 2.3, construct]

4.1 For $f\in\operatorname{Ind}_H^G L$ put $\Phi(f):=\sum_{t\in S}t\cdot f(t)$, an element of $V$ by step 2.3, and $\Phi$ is $\mathbb C$-linear. For $v=\sum_{t\in S}t\cdot u_t$ step 3.2 gives $\Psi(v)(t)=u_t$, so $\Phi(\Psi(v))=v$. Conversely, for $f\in\operatorname{Ind}_H^G L$ and $t\in S$ the definition of $\Phi$ gives $\Psi(\Phi(f))(t)=f(t)$, and both $\Psi(\Phi(f))$ and $f$ satisfy the covariance law [F1], so they agree on $G$; hence $\Psi$ is surjective and $\Phi=\Psi^{-1}$. [F1, step 3.2, algebra]

4.2 $\Psi$ is $G$-equivariant. Let $v=\sum_{t\in S}t\cdot u_t$ and $x\in G$; for each $t\in S$ write uniquely $xt=t'h$ with $t'\in S$, $h\in H$, so that $x\cdot v=\sum_t (xt)\cdot u_t=\sum_t t'\cdot(\lambda(h)u_t)$ has $L_{t'}$-component $\lambda(h)u_t$. By step 3.2, $\Psi(v)(x^{-1}t')=\Psi(v)(th^{-1})=\lambda(h)u_t$, while the function $x\cdot\Psi(v)$ takes the value $\Psi(v)(x^{-1}t')$ at $t'$ by [F1]; as $t$ runs over $S$ so does $t'$, so $\Psi(x\cdot v)$ and $x\cdot\Psi(v)$ agree on $S$ and both satisfy the covariance law, hence they agree on $G$. [F1, step 3.2, algebra]

5.1 Steps 4.1 and 4.2 exhibit $\Psi:V\to\operatorname{Ind}_H^G L=\operatorname{Ind}_H^G\lambda$ as a $G$-equivariant $\mathbb C$-linear bijection, where $\lambda$ is the linear character of step 1.2, so $V$ is monomial in the sense of [F5]. Together with step 3.1 this proves both assertions. [F5, step 1.2, step 3.1, step 4.1, step 4.2] ∎
