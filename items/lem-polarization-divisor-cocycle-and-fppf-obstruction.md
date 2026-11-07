---
id: lem-polarization-divisor-cocycle-and-fppf-obstruction
kind: lemma
title: "Polarization divisor cocycle and its fppf obstruction convention"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - def-cassels-tate-polarization-obstruction-class
  - def-fppf-h1-of-commutative-group-sheaves-as-torsors
  - lem-contracted-product-and-pushout-of-commutative-fppf-torsors
  - def-polarization-of-an-abelian-variety
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Poonen–Stoll, The Cassels–Tate Pairing on Polarized Abelian Varieties"
      url: "https://math.mit.edu/~poonen/papers/sha.pdf"
      locator: "Section 3.1, section 4 equation (6), and complete proof of Theorem 5, printed pp. 6, 8–10"
verification: {}
---

## Statement

Assume AC and DC. Let $K_s/K$ be a separable closure, $G=\operatorname{Gal}(K_s/K)$,
$A/K$ an abelian variety with supplied dual, and $X/K$ an $A$-torsor.
Supply $P\in X(K_s)$ and a Cartier divisor $D$ on $A_{K_s}$ whose
Néron–Severi class $\lambda$ is $G$-invariant. Suppose this class defines
the $K$-homomorphism $\lambda=\varphi_D:A\to A^\vee$.
Use $D_Q=(t_Q)_*D$, where $t_Q:A_{K_s}\to X_{K_s}$ sends $b$ to $Q+b$.
The following geometric identification is an explicit hypothesis: transport
of algebraically trivial Picard classes along $t_Q$ is independent of $Q$
and gives the $G$-equivariant identification
$A^\vee(K_s)=\operatorname{Pic}^0(X_{K_s})$.
Here $\operatorname{Div}^0$ means divisors with algebraically trivial class,
not divisors of numerical degree zero.

Put $a_\sigma=\sigma P-P$ and $E=D_P$. Then the cochains
$$
\gamma_\sigma=[\sigma D-D],\qquad \xi_\sigma=\lambda(a_\sigma),\qquad B_\sigma=E-\sigma E
$$
satisfy $B\in Z^1_{\mathrm{cts}}(G,\operatorname{Div}^0(X_{K_s}))$ and
$[B]=\xi-\gamma$ under the specified identification. Thus the connecting
class of $\lambda a-c_\lambda$ for the divisor-to-Picard sequence is zero,
whenever that sequence is supplied. The formula restricts to every local
Galois group after scalar extension.

The cocycle $\gamma$ is precisely the descent cocycle of the fppf torsor
$P_\lambda$ in [[def-cassels-tate-polarization-obstruction-class]], with
right-action convention $\sigma q=q+\gamma_\sigma$ at $q=[D]$.
This identifies this particular obstruction class and its restrictions;
it asserts no general higher-cohomology comparison theorem.

For a global field, assume additionally that $a,c_\lambda$ are locally
trivial and that the chosen Cassels–Tate pairing agrees with the homogeneous
space divisor-boundary construction specified below. Then
$\langle a,\lambda a-c_\lambda\rangle=0$. If also $2c_\lambda=0$, then
$\langle a,\lambda a+c_\lambda\rangle=0$. These are conditional conclusions.

## Facts & Assumptions

**Given:** The data and explicit geometric identification of the Statement.

[A1] AC and DC are retained from the parent conventions.
([[def-axiom-of-choice]], [[def-dependent-choice]])

[F1] The inhomogeneous differential is
$(du)_\sigma=\sigma u-u$ and
$(db)_{\sigma,\tau}=\sigma b_\tau-b_{\sigma\tau}+b_\sigma$.
([[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]])

[F2] The obstruction is the fiber torsor $P_\lambda$ of the Picard sheaf
over $\lambda$; an fppf torsor is a sheaf locally identified with its group
by translation at a chosen section. Pushout along a group homomorphism and
contracted products respectively give its induced map on classes and addition.
([[def-cassels-tate-polarization-obstruction-class]],
[[def-fppf-h1-of-commutative-group-sheaves-as-torsors]],
[[lem-contracted-product-and-pushout-of-commutative-fppf-torsors]])

[F3] Our sign convention is
$\varphi_D(b)=[t_b^*D-D]$.
([[def-polarization-of-an-abelian-variety]])

[A2] Only for the pairing conclusion, assume the divisor-boundary recipe:
for $z\in\operatorname{Sha}(A^\vee)$ on the torsor $X$, map $z$ by the connecting map of
$0\to K_s(X)^*/K_s^*\to\operatorname{Div}^0(X_{K_s})\to\operatorname{Pic}^0(X_{K_s})\to0$;
lift the resulting degree-two class to rational-function cohomology, and sum
the local constant Brauer invariants. Assume this is a well-defined pairing
and equals the pairing under consideration. If a divisor-valued lift of the
degree-one cocycle is closed, its degree-two cochain is zero, the global
rational-function lift may be zero, and the local constant classes may all
be zero. This specifies the exact compatibility required, rather than
asserting its construction for the current parent supplier.

## Proof

**Proof technique:** subtract the obstruction cocycle from the translated divisor cocycle.

**Given:** [A1], [F1]–[F3], the Statement's geometric identification, and, only in the last step, [A2].

1.1 The equation $a_{\sigma\tau}=a_\sigma+\sigma a_\tau$ follows by inserting $\sigma P$ between $\sigma\tau P$ and $P$. Hence $\xi=\lambda a$ is a cocycle. Invariance of the class of $D$ in the Néron–Severi quotient puts $\sigma D-D$ in $\operatorname{Pic}^0(A_{K_s})$; cancellation gives $\gamma_{\sigma\tau}=\gamma_\sigma+\sigma\gamma_\tau$. The data $P,D$ descend to a finite separable extension, so their stabilizers are open and all these cochains are continuous with discrete coefficients. [A1, F1, F3, given, algebra]

2.1 Under $t_P$, the class $\gamma_\sigma$ becomes $[(\sigma D)_P-D_P]$. Under $t_{\sigma P}$, the class $\xi_\sigma$ becomes $[(\sigma D)_P-(\sigma D)_{\sigma P}]$: on $A$, pushforward by translation by $-a_\sigma$ is pullback by translation by $a_\sigma$, and $\varphi_{\sigma D}=\lambda$. Independence of the identification from the trivialization allows subtraction. Their difference is therefore $[D_P-(\sigma D)_{\sigma P}]=[E-\sigma E]$. In particular $B_\sigma$ belongs to $\operatorname{Div}^0(X_{K_s})$. [F3, step 1.1, given, algebra]

2.2 Choose a finite Galois extension $L/K$ over which $D$ and its Picard class $q$ are defined. By [F2], $q$ is an $L$-section of $P_\lambda$, and $b\mapsto q+b$ is an isomorphism of fppf sheaves $A^\vee_L\to(P_\lambda)_L$. On the component of $L\otimes_K L$ indexed by $\sigma$, the difference of its two origins is $\sigma q-q=[\sigma D-D]=\gamma_\sigma$. Thus the transition functions of this very fiber torsor are $\gamma$, with the stated right-action sign; gluing the local translations recovers $P_\lambda$. This calculation uses an actual finite étale trivializing cover, hence is also fppf descent. Replacing $q$ by $q+h$ changes $\gamma$ by $\sigma h-h$, and translating coordinates identifies the two torsors. [F1, F2, step 1.1, choose, algebra]

3.1 Direct expansion gives $\sigma(E-\tau E)-(E-\sigma\tau E)+(E-\sigma E)=0$. Thus $dB=0$ as an equality of divisors, although $E$ need not belong to $\operatorname{Div}^0$. For any supplied exact divisor-to-Picard sequence the connecting class is computed by differentiating such lifts, so it is represented by zero. The same equalities hold after any compatible restriction and scalar extension, including every completion of a global field. [F1, step 2.1, algebra]

4.1 Enlarge $L$ to define $P$ also. In the pushout of $X$ along $\lambda$, the origin $[P,0]$ satisfies $\sigma[P,0]=[P+a_\sigma,0]=[P,\lambda a_\sigma]$ by the pushout relation of [F2]. Thus its transition cocycle is $\xi$. Contracting with the inverse of $P_\lambda$ subtracts $\gamma$, so $\xi-\gamma$ represents exactly $\lambda a-c_\lambda$ in fppf torsor classes. Base-changing that cover and its translation maps preserves their transition equations, proving the identical obstruction convention at every completion. In particular no affine-group comparison theorem is being applied to the generally nonaffine group $A^\vee$. Together with step 3.1 this proves the asserted obstruction and cochain compatibilities. [F2, step 3.1, step 2.2, algebra]

5.1 Under the additional local-triviality and construction hypotheses [A2], apply the recipe to $z=\lambda a-c_\lambda$. Steps 2.1–4.1 identify it with the cocycle lifted by $B$; step 3.1 makes the boundary zero. Choose the zero global degree-two lift and zero local constant lifts. Every local invariant is then zero, so their sum and the pairing are zero. If $2c_\lambda=0$ is also supplied, $\lambda a+c_\lambda=\lambda a-c_\lambda$, proving the second equality. [A2, step 2.1, step 3.1, step 2.2, step 4.1, algebra] ∎

## Authoring boundary

The cochain identity and the finite-cover identification of the fiber's
obstruction cocycle are proved here with the explicit geometric identification
in the Statement. Local triviality of $c_\lambda$, its two-torsion property,
and the current fppf pairing's agreement with [A2] are not proved here.
This lemma supplies neither divisible-kernel duality nor an unconditional
replacement for the parent theorem or alternating criterion.
