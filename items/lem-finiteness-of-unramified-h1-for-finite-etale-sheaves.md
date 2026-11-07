---
id: lem-finiteness-of-unramified-h1-for-finite-etale-sheaves
kind: lemma
title: Finiteness of unramified H1 for finite étale group schemes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-group-scheme-over-a-scheme
  - def-etale-morphism-schemes
  - def-finite-morphism-schemes
  - def-standard-etale-algebra
  - thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
  - thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form
  - thm-s-unit-theorem
  - lem-finiteness-of-picard-group-of-s-integers
  - lem-connected-finite-etale-cover-of-s-integers-is-a-number-ring
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad, Abelian Varieties"
      url: "https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf"
      locator: "§9.3, especially the unramified Kummer exercises 9.3.9–9.3.10; the present item supplies their finite-coefficient argument."
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§5.7.7 and §6.5.7, including the finite Selmer-set route to weak Mordell–Weil."
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Chapter I §§4.10–4.15 and §6.1–6.2; Milne's global-duality route is an independent finiteness treatment."
---

## Statement

Assume the Axiom of Choice. Let $K$ be a finite extension of $\mathbb Q$, let $S$ be a finite set of nonzero prime ideals of its ring of integers, and put $U=\operatorname{Spec}\mathcal O_{K,S}$. Let $n\ge2$ be an integer invertible in $\mathcal O_{K,S}$. Let $\mathcal M\to U$ be a finite étale $U$-scheme with commutative group-scheme operations and with multiplication by $n$ equal to the zero endomorphism. Then $H^1_{\mathrm{\acute et}}(U,\mathcal M)$, the group of isomorphism classes of étale $\mathcal M$-torsors (finite étale $U$-schemes with an $\mathcal M$-action that étale-locally is isomorphic to $\mathcal M$ acting on itself), is finite.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[def-number-field|number field]]

[[def-s-integers-and-s-units-of-a-number-field|ring of S-integers]]

[[def-group-scheme-over-a-scheme|group scheme over a scheme]]

[[def-etale-morphism-schemes|étale morphism]]

[[def-finite-morphism-schemes|finite morphism]]

## Facts & Assumptions

**Given:** The Axiom of Choice; a number field $K$; a finite set $S$ of finite prime ideals; $U=\operatorname{Spec}\mathcal O_{K,S}$; an integer $n\ge2$ invertible on $U$; and a finite étale commutative $U$-group scheme $\mathcal M$ with $n\mathcal M=0$.

[A1] The Axiom of Choice is assumed exactly as stated in [[def-axiom-of-choice]].

[F1] For connected $U$ and a geometric basepoint, finite étale covers correspond to finite continuous sets for the profinite étale fundamental group; in particular finite monodromy actions become trivial on a connected finite étale Galois cover ([[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]).

[F2] A finite abelian group is a finite product of cyclic groups ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

[F3] For every number field $L$ and finite set $S_L$ of finite primes, $\mathcal O_{L,S_L}^{\times}\cong\mu(L)\times\mathbb Z^r$ for a finite root-of-unity group $\mu(L)$ and some finite $r$ ([[thm-s-unit-theorem]]).

[F4] The Picard group of $\operatorname{Spec}\mathcal O_{L,S_L}$ is finite for every number field $L$ and finite set $S_L$ ([[lem-finiteness-of-picard-group-of-s-integers]]).

[F5] The ring $\mathcal O_{L,S_L}$ consists of the elements of $L$ integral at every finite prime outside $S_L$ ([[def-s-integers-and-s-units-of-a-number-field]]).

[F6] Every nonempty connected finite étale cover of $\operatorname{Spec}\mathcal O_{K,S}$ is isomorphic to $\operatorname{Spec}\mathcal O_{L,S_L}$ for a finite separable extension $L/K$ and the primes $S_L$ above $S$ ([[lem-connected-finite-etale-cover-of-s-integers-is-a-number-ring]]).

[F7] A monic polynomial quotient whose formal derivative is a unit is finite étale; this is the standard-étale criterion ([[def-standard-etale-algebra]]).



## Proof

**Proof technique:** trivialize finite monodromy after a finite étale Galois cover, prove finiteness there by the Kummer sequence, then use the finite quotient of fundamental groups to bound restriction fibers.

1.1 Since $n$ is invertible on $U$, $\mu_n=\operatorname{Spec}(\mathcal O_U[T]/(T^n-1))$ is finite étale: the polynomial is monic and its derivative $nT^{n-1}$ is a unit in the quotient. Apply [F7]. [given, F7, construct]

1.2 By [F5], $\mathcal O_{K,S}$ is a subring of the field $K$, so it is a domain and $U$ is connected. [F5, given]

2.1 The finite étale group schemes $\mathcal M$ and $\mu_n$ have finite monodromy actions. Their open kernels have an open normal intersection. By [F1], with AC [A1], this intersection corresponds to a nonempty connected finite étale Galois cover $V\to U$ on which both group schemes become constant. [A1, F1, step 1.1, step 1.2, construct]

3.1 The cover in step 2.1 is connected and finite étale, so [F6] identifies it with $V=\operatorname{Spec}\mathcal O_{L,S_L}$ for a finite separable extension $L/K$, where $S_L$ is the finite set of primes above $S$. The pullback of the unit $n$ stays a unit. [A1, F6, step 2.1]

4.1 The geometric fibre of $\mathcal M$ is a finite abelian group killed by $n$. By [F2], it is a finite product of cyclic groups $\mathbb Z/d_i\mathbb Z$ with $d_i\mid n$. Since $V$ trivializes $\mu_n$, it trivializes each subgroup $\mu_{d_i}$; choosing a primitive $d_i$-th root identifies the corresponding constant cyclic group with $\mu_{d_i}$. Put $\Delta=\pi_1^{\mathrm{\acute et}}(V)$. By [F1], torsors under a constant finite group on connected $V$ correspond to finite continuous $\Delta$-sets with a simply transitive group action; after choosing a point, their classes are continuous 1-cocycles modulo coboundaries. For a product of cyclic groups, cocycles and coboundaries are coordinatewise, so its $H^1$ is the product of the cyclic-factor $H^1$ groups. It therefore suffices to prove $H^1_{\mathrm{\acute et}}(V,\mu_d)$ finite for each $d\mid n$, including the empty cyclic product. [A1, F1, F2, step 2.1, step 3.1, given, construct]

4.2 Fix $d\mid n$. The unit $d$ remains invertible on $V$ by step 3.1. For any étale $V$-scheme $W$ and unit $u\in\mathcal O_W^\times$, the quotient $\mathcal O_W[T]/(T^d-u)$ is standard étale: the polynomial is monic, $T$ is a unit in the quotient, and $dT^{d-1}$ is a unit. By [F7], adjoining a $d$-th root is an étale cover. Hence $[d]:\mathbb G_m\to\mathbb G_m$ is an epimorphism of étale sheaves and $1\to\mu_d\to\mathbb G_m\xrightarrow{(\cdot)^d}\mathbb G_m\to1$ is exact. [F7, step 3.1, given, construct]

5.1 A $\mu_d$-torsor has local transition functions $g_{ij}\in\mu_d$; regarding them in $\mathbb G_m$ glues a line bundle $M$, and $g_{ij}^d=1$ gives a trivialization $M^{\otimes d}\cong\mathcal O_V$. Conversely, from a line bundle and such a trivialization, choose local frames and take frames whose $d$-th power is the fixed trivialization; their transition functions lie in $\mu_d$, giving the inverse construction. Every class in $\operatorname{Pic}(V)[d]$ admits a trivialization of $M^{\otimes d}\cong\mathcal O_V$, so the map onto $\operatorname{Pic}(V)[d]$ is surjective. If $M$ is trivial, a global frame turns the trivialization into a unit $u\in\mathcal O_V^\times$, and the torsor is the scheme of $d$-th roots of $u$; it is trivial exactly when $u$ is a $d$-th power, while changing the frame changes $u$ by a $d$-th power. Therefore $\mathcal O_{L,S_L}^{\times}/(\mathcal O_{L,S_L}^{\times})^d\to H^1_{\mathrm{\acute et}}(V,\mu_d)\to\operatorname{Pic}(V)[d]\to0$ is exact: the kernel at the middle is exactly the torsors whose associated line bundle is trivial. [A1, step 3.1, step 4.2, given, construct]

6.1 By the S-unit theorem [F3] under AC [A1], write $\mathcal O_{L,S_L}^{\times}\cong\mu(L)\times\mathbb Z^r$ with finite $\mu(L)$. Its quotient by $d$-th powers has at most $|\mu(L)|d^r$ elements, so the first group in step 5.1 is finite. [A1, F3, step 5.1, algebra]

7.1 By [F4] and AC [A1], $\operatorname{Pic}(V)$ is finite, hence $\operatorname{Pic}(V)[d]$ is finite. The map in step 5.1 is surjective onto this finite group and has finite kernel by step 6.1, so $H^1_{\mathrm{\acute et}}(V,\mu_d)$ is finite. Step 4.1 then makes $H^1_{\mathrm{\acute et}}(V,\mathcal M)$ a finite product of finite groups, hence finite. [A1, F4, step 4.1, step 5.1, step 6.1]

8.1 Put $\Gamma=\pi_1^{\mathrm{\acute et}}(U)$ and retain $\Delta=\pi_1^{\mathrm{\acute et}}(V)$ from step 4.1. The cover in step 2.1 makes $\Delta$ normal of finite index and trivializes the action on the finite geometric fibre $M_0$ of $\mathcal M$. A torsor is a finite $\Gamma$-set with a simply transitive equivariant $M_0$-action. Choosing a point $x_0$ gives a continuous cocycle $c(\gamma)$ by $\gamma x_0=c(\gamma)+x_0$; the cocycle law follows from equivariance, changing $x_0$ adds a coboundary, and conversely each cocycle defines such an action. Thus torsor classes are the continuous cocycles modulo coboundaries, over $U$ and $V$ respectively. If two classes over $U$ have the same restriction, change representatives by a coboundary so they agree on $\Delta$, then subtract. The difference cocycle vanishes on $\Delta$; for $\delta\in\Delta$, normality and the trivial action give $c(\gamma\delta)=c(\gamma)$ and $c(\delta\gamma)=c(\gamma)$, so it factors through $\Gamma/\Delta$. Only finitely many functions $\Gamma/\Delta\to M_0$ exist, so restriction has finite fibers. Its target is finite by step 7.1, hence $H^1_{\mathrm{\acute et}}(U,\mathcal M)$ is finite. [A1, F1, step 2.1, step 4.1, step 7.1, algebra] ∎
