---
id: lem-common-domain-commutator-integrates-to-weyl-relations
kind: lemma
title: "A common core with graph-differentiable orbits integrates Heisenberg commutators"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [lem-mean-value-inequality-for-a-differentiable-banach-valued-curve, thm-stone-one-parameter-unitary-groups, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-unbounded-linear-operator-domain-and-graph, def-hilbert-space, def-axiom-of-choice, def-countable-choice, def-polynomial-weyl-algebra]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 5.1, Theorems 5.1 and 5.3 and their proofs, printed pp. 145–148: functional-calculus groups, generator domains and uniqueness. The sufficient common-core integration argument is supplied locally."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $A_1,\ldots,A_m$ be self-adjoint operators on a complex Hilbert space $H$, where $1\le m<\infty$, and let $c=(c_{ab})$ be a real skew-symmetric matrix. Define $U_a(s)=e^{isA_a}$ by the Borel functional calculus. Suppose a complex linear subspace $D\subset H$ has the following properties:

- $D$ is a core for every $A_b$: it is contained in $D(A_b)$ and is dense there for the graph norm $\|\xi\|+\|A_b\xi\|$. In particular it is dense in $H$.
- $A_aD\subset D$ and $U_a(s)D=D$ for every $a$ and every real $s$.
- On $D$, $(A_aA_b-A_bA_a)\xi=i c_{ab}\xi$ for all $a,b$.
- For every $a,b$ and $\xi\in D$, the orbit $s\mapsto U_a(s)\xi$ is differentiable in the graph norm of $A_b$, with derivative $iA_aU_a(s)\xi$. Explicitly, in addition to the Hilbert-space derivative, the required limit is

$$\lim_{h\to0}\left\|\frac{A_bU_a(s+h)\xi-A_bU_a(s)\xi}{h}-iA_bA_aU_a(s)\xi\right\|=0.$$

These are sufficient regularity hypotheses, stronger than a commutator identity on a common invariant dense domain alone. Then, as bounded operators on all of $H$,

$$U_a(s)U_b(t)=e^{-ic_{ab}st}U_b(t)U_a(s)\qquad(s,t\in\mathbb R).$$

For $f\in\mathbb R^m$ put

$$W(f)=\exp\left(\frac i2\sum_{a<b}c_{ab}f_af_b\right)U_1(f_1)\cdots U_m(f_m),\qquad \sigma(f,g)=\sum_{a,b}f_ac_{ab}g_b.$$

Then $W$ is strongly continuous, unitary-valued, $W(0)=I$, and

$$W(f)W(g)=e^{-i\sigma(f,g)/2}W(f+g),\qquad W(f)^*=W(-f).$$

In particular, taking $m=2n$, $A=(Q_1,\ldots,Q_n,P_1,\ldots,P_n)$ and $c=\kappa\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}$ gives the finite-mode exponentiated Weyl relations at any real central parameter $\kappa$. If $\kappa\ne0$, the restrictions $x_j=Q_j|_D$ and $p_j=(i/\kappa)P_j|_D$ give an algebraic $A_n(\mathbb C)$-module on $D$ in the normalization of [[def-polynomial-weyl-algebra]]. The conclusion applies to these eligible Hilbert-space realizations; it asserts no exponentiation for arbitrary algebraic modules, universal $C^*$-completion, or uniqueness of representations.

## Facts & Assumptions

**Given:** The finite family, matrix, common core and graph-orbit hypotheses in the Statement, under [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] [[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]: functional calculus gives strongly continuous unitary $U_a(s)$, with derivative domain exactly $D(A_a)$ and derivative $iA_aU_a(s)\xi$ there.

[F2] [[thm-stone-one-parameter-unitary-groups]]: two strongly continuous unitary groups with the same self-adjoint generator and exact generator domain agree.

[F3] [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]: self-adjoint operators are closed and have no proper symmetric extensions. Domains and graphs have the meaning of [[def-unbounded-linear-operator-domain-and-graph]].

[F4] [[def-polynomial-weyl-algebra]]: $A_n(\mathbb C)$ has relations $[p_j,x_k]=\delta_{jk}I$ and zero same-type commutators.

[F5] [[lem-mean-value-inequality-for-a-differentiable-banach-valued-curve]]: a continuous Banach-valued curve with zero real-variable derivative on an interval is constant there. A complex Hilbert space is a Banach space, read as a real space for this derivative.

## Proof

1.1 Fix $a,b$ and $\xi\in D$, abbreviate $U=U_a$ and $c=c_{ab}$, and set $F(s)=U(s)A_bU(-s)\xi$. Every product is defined: $U(-s)\xi\in D$, $A_bD\subset D\subset D(A_a)$, and $A_aD\subset D\subset D(A_b)$. The graph-orbit hypothesis gives the norm derivative of $\eta(s)=A_bU(-s)\xi$ as $\eta'(s)=-iA_bA_aU(-s)\xi$. The difference quotient for $U(s)\eta(s)$ splits into $U(s+h)(\eta(s+h)-\eta(s))/h$ and $(U(s+h)-U(s))\eta(s)/h$. Strong continuity and norm one of $U(s+h)$ handle the first term; [F1] applies to the fixed vector $\eta(s)\in D(A_a)$ in the second. Consequently $F'(s)=iU(s)(A_aA_b-A_bA_a)U(-s)\xi=-c\xi$. The curve $G(s)=F(s)+cs\xi$ is norm differentiable on $\mathbb R$ with derivative zero, hence is continuous there; its real-variable norm derivative is also its Fréchet derivative, since the remainder divided by $|h|$ tends to zero. For any $s$, apply [F5] to $G$ on the closed interval with endpoints $0,s$ (the case $s=0$ is immediate). It gives $G(s)=G(0)=A_b\xi$, so $F(s)=A_b\xi-cs\xi$. [given, F1, F5, algebra]

2.1 For fixed $s$, the closed operator $B=U(s)A_bU(-s)$ has domain $U(s)D(A_b)$ and is self-adjoint: substituting $U(-s)x,U(-s)y$ in the adjoint-domain condition gives $B^*=U(s)A_b^*U(-s)=B$. Moreover $D$ is a core for $B$, because $U(s)$ transports graph approximations from the core $D$ of $A_b$ and $U(s)D=D$. The operator $A_b-csI$ is closed on $D(A_b)$: convergence of $x_j$ and $(A_b-csI)x_j$ implies convergence of $A_bx_j$ and closedness of $A_b$ applies. The two graph norms of $A_b$ and $A_b-csI$ are equivalent by the triangle inequality, so $D$ is a core for this shifted operator as well. Step 1.1 identifies their restrictions to $D$; taking their graph closures yields the exact operator equality $B=A_b-csI$, including equality of domains. In particular $U(s)D(A_b)=D(A_b)$ has now been proved, rather than assumed. [given, F3, step 1.1, algebra]

3.1 Fix $s$ and consider $K(t)=U_a(s)U_b(t)U_a(-s)$ and $L(t)=e^{-ic_{ab}st}U_b(t)$. Both are strongly continuous unitary groups by their formulas and [F1]. For $K$, taking difference quotients after unitary conjugation shows its exact derivative domain is $U_a(s)D(A_b)$, with derivative $iB$. For $L$, differentiating the scalar factor shows that every vector of $D(A_b)$ has derivative $i(A_b-c_{ab}sI)$. Conversely, if the derivative of $L(t)x$ at zero exists, writing $U_b(t)x=e^{ic_{ab}st}L(t)x$ proves the derivative of $U_b(t)x$ exists, so $x\in D(A_b)$ by [F1]. Thus the exact generators agree by step 2.1; [F2] gives $K=L$. Multiplying on the right by $U_a(s)$ proves the claimed pairwise Weyl relation on all of $H$. This is the functional-calculus exponentiation step; no power series of unbounded operators was used. [given, F1, F2, step 2.1, algebra]

4.1 All factors defining $W(f)$ are unitary, and $W(0)=I$. Their finite product is strongly continuous jointly in $f$: subtract the products at two points and telescope, using norm one for the factors and strong continuity on each fixed vector in the finitely many resulting terms. To multiply $W(f)$ and $W(g)$, move each $U_a(g_a)$ left past $U_b(f_b)$ for $b>a$. Step 3.1 contributes $\exp(i c_{ab}f_bg_a)$ for each such pair; same-index factors combine by the group law. The scalar exponent after dividing by the defining scalar of $W(f+g)$ is $\frac i2\sum_{a<b}c_{ab}(f_af_b+g_ag_b-(f_a+g_a)(f_b+g_b))+i\sum_{a<b}c_{ab}f_bg_a=-\frac i2\sum_{a<b}c_{ab}(f_ag_b-f_bg_a)=-i\sigma(f,g)/2$. This proves the full displayed Weyl relation. Since $\sigma(f,-f)=0$, it gives $W(f)W(-f)=W(-f)W(f)=I$, so unitarity yields $W(f)^*=W(-f)$. [given, F1, step 3.1, algebra]

5.1 In the stated block-matrix case the commutators on $D$ are $[Q_j,Q_k]=[P_j,P_k]=0$ and $[Q_j,P_k]=i\kappa\delta_{jk}I$. Hence $[(i/\kappa)P_j,Q_k]=\delta_{jk}I$ when $\kappa\ne0$. Domain invariance makes these restrictions endomorphisms of $D$, so assigning a free word the corresponding composition annihilates all defining relators in [F4] and descends to a unital $A_n(\mathbb C)$-action. Step 4.1 gives its eligible exponentiated realization, with the exact phase and finite-mode scope claimed. The proof uses Choice through [F1]–[F2]'s spectral/Stone construction and Countable Choice in the self-adjoint/graph supplier closure [F3]; it makes no assertion that the common-core and graph-orbit assumptions follow from algebraic relations alone. [given, F1, F2, F3, F4, step 4.1, algebra, construct] ∎
