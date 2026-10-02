---
id: lem-cartier-to-weil-respects-principal-and-addition
kind: lemma
title: "The Cartier-to-Weil map respects addition and principal divisors"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-dependent-choice
  - thm-cartier-to-weil-divisor-normal-scheme
  - thm-cartier-divisors-mod-principal-to-picard
  - def-picard-group-scheme
  - def-principal-weil-divisor-and-class-group
  - def-order-codimension-one-rational-function
  - def-cartier-divisor
  - def-principal-cartier-divisor
  - def-weil-divisor-normal-noetherian-scheme
  - def-quotient-group
  - def-normal-subgroup
  - thm-quotient-group-universal-property
  - def-group-homomorphism
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, §31.27 (Definitions 27.2, 27.7 and Lemmas 27.4, 27.6: Weil divisors and the class group) and §31.28 (Definition 28.4 and Lemma 28.5 with (28.5.1): the class of an invertible module)"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §15.4 (line bundles and Weil divisors; the diagram (15.4.11.1) and the map Pic to Cl)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $X$ be a
normal Noetherian integral scheme
([[def-weil-divisor-normal-noetherian-scheme]]), with group of Cartier
divisors $\operatorname{CaDiv}(X)$ ([[def-cartier-divisor]]), group of Weil
divisors $\operatorname{Div}(X)$ and Weil divisor class group
$\operatorname{Cl}(X)=\operatorname{Div}(X)/P(X)$
([[def-principal-weil-divisor-and-class-group]]), and let
$$\operatorname{cyc}:\operatorname{CaDiv}(X)\longrightarrow\operatorname{Div}(X)$$
be the assignment sending a Cartier divisor to its associated Weil divisor
([[thm-cartier-to-weil-divisor-normal-scheme]]). Then:

1. (additivity) $\operatorname{cyc}$ is a homomorphism of abelian groups:
   $\operatorname{cyc}(D+E)=\operatorname{cyc}(D)+\operatorname{cyc}(E)$ for
   all Cartier divisors $D,E$ on $X$, and $\operatorname{cyc}(0)=0$;
2. (principal divisors) $\operatorname{cyc}(\operatorname{div}_C(f))
   =\operatorname{div}_W(f)$ for every $f\in K(X)^{\times}$
   ([[def-principal-cartier-divisor]]), so $\operatorname{cyc}$ carries the
   subgroup of principal Cartier divisors into the subgroup $P(X)$ of
   principal Weil divisors;
3. (the induced map) there is a canonical homomorphism of abelian groups
   $$\operatorname{Pic}(X)\longrightarrow\operatorname{Cl}(X),$$
   the Cartier/Picard class map, which carries the isomorphism class
   $[\mathcal O_X(D)]$ of a Cartier divisor to the class of
   $\operatorname{cyc}(D)$ in $\operatorname{Cl}(X)$
   ([[def-picard-group-scheme]]).

The Axiom of Dependent Choice is inherited from the two suppliers that
construct the Weil divisor $\operatorname{cyc}(D)$ and the principal Weil
divisor $\operatorname{div}_W(f)$; no further choice is used.

## Facts & Assumptions

**Given:** a normal Noetherian integral scheme $X$, with its groups
$\operatorname{CaDiv}(X)$, $\operatorname{Div}(X)$ and
$\operatorname{Cl}(X)=\operatorname{Div}(X)/P(X)$, and the assignment
$\operatorname{cyc}$.

[F1] Assume DC. For a normal Noetherian scheme $X$ and a Cartier divisor $D$
represented by local equations $f_i\in\mathcal K_X(U_i)^{\times}$ on an open
cover, and for every prime divisor $Z$ with generic point $\xi$ and every
index $i$ with $\xi\in U_i$, the value $v_\xi(f_{i,\xi})$ of the normalized
valuation of the discrete valuation ring $\mathcal O_{X,\xi}$ is independent
of $i$ and of the local-equation datum; the sum
$\operatorname{cyc}(D)=\sum_Zv_\xi(f_{i,\xi})[Z]$ is a well-defined Weil
divisor on $X$; and if $X$ is integral then
$\operatorname{cyc}(\operatorname{div}_C(f))=\operatorname{div}_W(f)$ for
every $f\in K(X)^{\times}$
([[thm-cartier-to-weil-divisor-normal-scheme]]).

[F2] For a prime divisor $Z$ with generic point $\xi$ the order of vanishing
is $\operatorname{ord}_Z(f)=v_\xi(f_\xi)$, where $v_\xi$ is the normalized
discrete valuation of $\mathcal O_{X,\xi}$; $v_\xi$ is a group homomorphism
$K^{\times}\to\mathbb Z$, so $\operatorname{ord}_Z(fg)
=\operatorname{ord}_Z(f)+\operatorname{ord}_Z(g)$,
$\operatorname{ord}_Z(1)=0$ and
$\operatorname{ord}_Z(f^{-1})=-\operatorname{ord}_Z(f)$
([[def-order-codimension-one-rational-function]]).

[F3] Cartier divisors on $X$ form an abelian group
$\operatorname{CaDiv}(X)$: a sum $D+E$ is represented on a common open cover
by the products $f_ig_i$ of local equations of $D$ and $E$, passing to a
refinement or replacing equations by unit multiples does not change the
divisor, and the zero element is the class of the constant equation $1$
([[def-cartier-divisor]]).

[F4] For a global meromorphic unit $f\in K(X)^{\times}$ the principal Cartier
divisor $\operatorname{div}_C(f)=q_X(f)$ is represented by the single global
equation $f$ on the open set $X$, and
$\operatorname{div}_C(fg)=\operatorname{div}_C(f)+\operatorname{div}_C(g)$;
the principal Cartier divisors form a subgroup of $\operatorname{CaDiv}(X)$
([[def-principal-cartier-divisor]]).

[F5] Assume DC. The principal Weil divisor
$\operatorname{div}_W(f)=\sum_Z\operatorname{ord}_Z(f)[Z]$ defines a group
homomorphism $\operatorname{div}_W:K(X)^{\times}\to\operatorname{Div}(X)$
whose image is the subgroup $P(X)$ of principal Weil divisors; the class group
is $\operatorname{Cl}(X)=\operatorname{Div}(X)/P(X)$, and two Weil divisors
have the same class exactly when their difference is
$\operatorname{div}_W(f)$ for some $f\in K(X)^{\times}$
([[def-principal-weil-divisor-and-class-group]]).

[F6] A Weil divisor on a Noetherian normal scheme is a formal sum
$\sum_Zn_Z[Z]$ over the prime divisors with locally finite support, and
addition is coefficientwise; in particular two Weil divisors are equal if and
only if their coefficients at every prime divisor agree
([[def-weil-divisor-normal-noetherian-scheme]]).

[F7] For a normal subgroup $N\trianglelefteq G$ the quotient group $G/N$ has
product $(gN)(hN)=ghN$, and the quotient map $G\to G/N$ is a homomorphism
([[def-quotient-group]]).

[F8] If $N\trianglelefteq G$ and $f:G\to H$ is a homomorphism with
$N\subseteq\ker f$, then $f$ factors uniquely as $f=\bar f\circ\pi$ with
$\bar f:G/N\to H$ a homomorphism, $\bar f(gN)=f(g)$
([[thm-quotient-group-universal-property]]).

[F9] On an integral scheme $X$ the rule $D\mapsto[\mathcal O_X(D)]$ is a
group homomorphism $\operatorname{CaDiv}(X)\to\operatorname{Pic}(X)$ with
kernel the principal Cartier divisors, and it is surjective; hence the induced
map $\operatorname{CaDiv}(X)/\operatorname{Prin}_C(X)\to\operatorname{Pic}(X)$
is an isomorphism of abelian groups
([[thm-cartier-divisors-mod-principal-to-picard]]).

[F10] The Picard group $\operatorname{Pic}(X)$ is the group of isomorphism
classes of invertible $\mathcal O_X$-modules under tensor product, with
identity $[\mathcal O_X]$ ([[def-picard-group-scheme]]).

[F11] The Axiom of Dependent Choice (DC) is the statement about entire
relations and sequences recorded in
[[def-dependent-choice]]; the statements [F1] and [F5] are available under
it, and no other choice principle is used here.

[F12] A subgroup of an abelian group is normal, and a composite of group
homomorphisms is a group homomorphism
([[def-normal-subgroup]], [[def-group-homomorphism]]).

## Proof

1.1 **Additivity of the associated Weil divisor.** Assume DC, as in [F11] and through the supplier [F1]. Let $D,E$ be Cartier divisors on $X$; refining their representing covers if necessary, represent both on a common open cover $\{U_i\}$ by local equations $f_i$ and $g_i$, so that $D+E$ is represented on $U_i$ by the product $f_ig_i$ by [F3]. For a prime divisor $Z$ with generic point $\xi$ choose an index $i$ with $\xi\in U_i$; then the coefficient of $\operatorname{cyc}(D+E)$ at $Z$ is $v_\xi((f_ig_i)_\xi)=v_\xi(f_{i,\xi})+v_\xi(g_{i,\xi})$ by the additivity of the valuation in [F2], and these two summands are exactly the coefficients of $\operatorname{cyc}(D)$ and $\operatorname{cyc}(E)$ at $Z$ by [F1]. Since the coefficients agree at every prime divisor, [F6] gives $\operatorname{cyc}(D+E)=\operatorname{cyc}(D)+\operatorname{cyc}(E)$; in particular $\operatorname{cyc}$ is a group homomorphism and $\operatorname{cyc}(0)=0$. [F1, F2, F3, F6, F11]

1.2 **Principal Cartier divisors map to principal Weil divisors.** Let $f\in K(X)^{\times}$. By [F4] the principal Cartier divisor $\operatorname{div}_C(f)$ is represented by the single global equation $f$, so by [F1] its associated Weil divisor has at a prime divisor $Z$ with generic point $\xi$ the coefficient $v_\xi(f_\xi)=\operatorname{ord}_Z(f)$ by [F2]; the right hand side is by definition the coefficient of $\operatorname{div}_W(f)$ at $Z$ by [F5]. As the coefficients agree at every prime divisor, [F6] gives $\operatorname{cyc}(\operatorname{div}_C(f))=\operatorname{div}_W(f)$, and since $\operatorname{div}_W(f)\in P(X)$ by [F5], the image of the subgroup of principal Cartier divisors lies in $P(X)$. [F1, F2, F4, F5, F6]

2.1 **The class homomorphism.** Let $\psi:\operatorname{CaDiv}(X)\to\operatorname{Cl}(X)$ be the composite of $\operatorname{cyc}$ with the quotient map $\operatorname{Div}(X)\to\operatorname{Cl}(X)=\operatorname{Div}(X)/P(X)$. By step 1.1 and [F7] both maps are group homomorphisms, so $\psi$ is a group homomorphism by [F12], and by step 1.2 it kills every principal Cartier divisor: $\psi(\operatorname{div}_C(f))$ is the class of $\operatorname{div}_W(f)$, which lies in $P(X)$, hence is the zero class of $\operatorname{Cl}(X)$. In other words $\operatorname{Prin}_C(X)\subseteq\ker\psi$. [F4, F5, F7, F12, step 1.1, step 1.2]

3.1 **Factoring through the quotient by principal divisors.** The subgroup $\operatorname{Prin}_C(X)$ of the abelian group $\operatorname{CaDiv}(X)$ is normal by [F3] and [F12], so by the universal property [F8] applied to $\psi$ and $\operatorname{Prin}_C(X)\subseteq\ker\psi$ there is a unique homomorphism $\bar\psi:\operatorname{CaDiv}(X)/\operatorname{Prin}_C(X)\to\operatorname{Cl}(X)$ with $\bar\psi(D+\operatorname{Prin}_C(X))=\psi(D)=[\operatorname{cyc}(D)]$ for every Cartier divisor $D$. [F3, F8, F12, step 2.1]

4.1 **The induced map $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$.** Since $X$ is integral, [F9] says that $D\mapsto[\mathcal O_X(D)]$ induces an isomorphism $\bar\varphi:\operatorname{CaDiv}(X)/\operatorname{Prin}_C(X)\to\operatorname{Pic}(X)$ of abelian groups. Let $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$ be the composite of the inverse of $\bar\varphi$ with $\bar\psi$: it is a group homomorphism by [F12], and for every Cartier divisor $D$ it carries $[\mathcal O_X(D)]=\bar\varphi(D+\operatorname{Prin}_C(X))$ to $\bar\psi(D+\operatorname{Prin}_C(X))=[\operatorname{cyc}(D)]$ by step 3.1. In particular the prescription $[\mathcal O_X(D)]\mapsto[\operatorname{cyc}(D)]$ is well defined, because two Cartier divisors with the same image in $\operatorname{Pic}(X)$ differ by an element of $\ker\varphi=\operatorname{Prin}_C(X)$, where $\varphi:\operatorname{CaDiv}(X)\to\operatorname{Pic}(X)$ is the original class map by [F9], on which $\psi$ vanishes, so they determine the same quotient class and the same value of $\bar\psi$. [F9, F10, F12, step 3.1] ∎

The Axiom of Dependent Choice is used exactly through the two supplier
statements [F1] and [F5]: it produces the local finiteness of
$\operatorname{cyc}(D)$ for an arbitrary Cartier divisor $D$ and the analogous
finiteness for $\operatorname{div}_W(f)$; no sequence is built and no family
is selected anywhere in this proof. The construction is the divisor-class
companion of the classical map of the Weil divisor class associated to an
invertible module; when $X$ has no prime divisors the groups
$\operatorname{Div}(X)$, $P(X)$ and $\operatorname{Cl}(X)$ are trivial and
the induced map is the trivial homomorphism, and the computation is
compatible with the identification
$\operatorname{CaDiv}(X)/\operatorname{Prin}_C(X)\cong\operatorname{Pic}(X)$
of [F9], under which $[\operatorname{cyc}(D)]$ is the class of the invertible
sheaf $\mathcal O_X(D)$.
