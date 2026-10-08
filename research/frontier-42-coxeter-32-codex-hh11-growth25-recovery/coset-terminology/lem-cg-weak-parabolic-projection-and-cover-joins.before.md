---
id: "lem-cg-weak-parabolic-projection-and-cover-joins"
kind: "lemma"
title: "The weak parabolic projection, its adjoints, and the cover-join lemmas"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 19
deps:
  - def-cg-coxeter-diagram-components-and-finite-type
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - def-cg-parabolic-quotient-and-two-sided-minima
  - thm-cg-root-sign-and-simple-reflection-positivity
  - def-cg-geometric-inversion-set
  - def-cg-left-right-weak-order-and-descents
  - thm-cg-root-inversion-formulas-and-strong-exchange
  - thm-cg-parabolic-intersections-and-coset-factorization
  - lem-cg-weak-order-is-a-graded-partial-order
  - thm-cg-finite-parabolic-longest-element-and-opposition
  - thm-cg-weak-order-meet-semilattice-and-finite-lattice
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722v3"
      locator: "Section 2.5, Proposition 2.20 and Lemmas 2.22-2.23 (printed pp. 14-15); Proposition 2.20's proof is attributed to Jedlička, and Lemmas 2.22-2.23 are stated there with references to earlier proofs"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339v1"
      locator: "Section 2, parabolic-prefix description (printed pp. 5-6), and complete proofs of Lemmas 2.7-2.8 (printed pp. 6-7)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 2, Section 2.4, Proposition 2.4.4 and its proof with Corollary 2.4.5 (printed pp. 39-40)"
verification:
  precheck: pass
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type, with $S$ finite; finite type means $W$ is finite ([[def-cg-coxeter-diagram-components-and-finite-type]] (4)). Use the right and left weak orders, covers, meets and joins of [[def-cg-left-right-weak-order-and-descents]], and the inversion sets $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$ of [[def-cg-geometric-inversion-set]]. For $J\subseteq S$, write $w=w_Jd$ for the unique length-additive factorization with $w_J\in W_J$ and $d\in{}^JW$ the minimal representative of the left coset $W_Jw$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3), [[def-cg-parabolic-quotient-and-two-sided-minima]] (2)); call $w_J$ the $W_J$-prefix of $w$. Put $\Phi_{J,+}:=\Phi_J\cap\Phi_+$, where $\Phi_J=\Phi\cap V_J$ and $V_J=\operatorname{span}\{e_s:s\in J\}$ ([[thm-cg-parabolic-intersections-and-coset-factorization]] (2)). Let $w_0$ and $w_0(J)$ be the longest elements of $W$ and $W_J$, respectively ([[thm-cg-finite-parabolic-longest-element-and-opposition]]).

**(1) Inversion set of the prefix.** For every $w\in W$,

$$N(w_J^{-1})=N(w^{-1})\cap\Phi_{J,+}.$$

Consequently $w_J$ is the greatest element of $W_J$ below $w$ in $\le_R$, the map $w\mapsto w_J$ is order-preserving, and for every $v\in W_J$ one has $v\le_R w$ if and only if $v\le_R w_J$.

**(2) The largest lift.** For every $z\in W_J$, the largest element $x\in W$ with $x_J=z$ is

$$x=z\,w_0(J)\,w_0.$$

It satisfies $\ell(x)=\ell(z)+\ell(w_0)-\ell(w_0(J))$, and

$$N(x^{-1})=N(z^{-1})\cup(\Phi_+\setminus\Phi_{J,+}).$$

For every $y\in W$, $y\le_R x$ if and only if $y_J\le_R z$.

**(3) Meet and join preservation.** For all $x,y\in W$,

$$(x\wedge y)_J=x_J\wedge y_J,\qquad (x\vee y)_J=x_J\vee y_J.$$

Thus $w\mapsto w_J$ is a surjective lattice homomorphism from the finite weak order on $W$ to the induced weak order on $W_J$.

**(4) Cover-join lemmas.** For $w\in W$ define its set of cover roots by

$$\operatorname{cov}(w):=\{\alpha\in N(w^{-1}):t_\alpha w=ws\text{ and }\ell(ws)=\ell(w)-1\text{ for some }s\in S\}.$$

For $s\in S$ put $J:=S\setminus\{s\}$. Then:

(i) if $e_s\in\operatorname{cov}(w)$ and $t_\alpha\in W_J$ for every $\alpha\in\operatorname{cov}(w)\setminus\{e_s\}$, then $w=s\vee w_J$;

(ii) if $y\in W_J$, then $\operatorname{cov}(s\vee y)=\operatorname{cov}(y)\cup\{e_s\}$.

No Axiom of Choice (AC) is used.

## Facts & Assumptions

**Given:** finite type $(W,S)$, its root system $\Phi=\Phi_+\sqcup\Phi_-$, canonical reflection representation $\rho$, length function $\ell$, and the right and left weak orders.

[F1] Finite type, or spherical type, is the condition that $W$ is finite ([[def-cg-coxeter-diagram-components-and-finite-type]] (4)).

[F2] In the right weak order, a join is the least upper bound and a meet is the greatest lower bound when they exist ([[def-cg-left-right-weak-order-and-descents]] (3)).

[F3] The right weak order satisfies $u\le_R v$ exactly when $N(u^{-1})\subseteq N(v^{-1})$ ([[lem-cg-weak-order-is-a-graded-partial-order]] (4)).

[F4] If a Coxeter system is finite, its right weak order is a lattice ([[thm-cg-weak-order-meet-semilattice-and-finite-lattice]] (2)); this applies to $W$ and to each finite $W_J$ once its Coxeter-system structure is identified by [F14].

[F5] For finite $W$, $w_0^2=1$, $\rho(w_0)\Phi_+=\Phi_-$, and $\ell(uw_0)=\ell(w_0)-\ell(u)=\ell(w_0u)$ ([[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)).

[F6] Every left coset $W_Jw$ has a unique minimal representative $d$, characterized by $\ell(sd)>\ell(d)$ for all $s\in J$; every $w\in W$ has a unique factorization $w=ud$ with $u\in W_J$ and this $d$, $\ell(w)=\ell(u)+\ell(d)$, and $\ell(vd)=\ell(v)+\ell(d)$ for every $v\in W_J$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3)).

[F7] The standard parabolic subgroup is $W_J=\langle J\rangle$ ([[def-cg-parabolic-quotient-and-two-sided-minima]] (1)).

[F8] $\Phi_J=\Phi\cap V_J$ and $\rho(v)V_J=V_J$ for every $v\in W_J$ ([[thm-cg-parabolic-intersections-and-coset-factorization]] (2)).

[F9] $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$ ([[def-cg-geometric-inversion-set]] (1)).

[F10] The map $\Phi_+\to T$, $\alpha\mapsto t_\alpha$, is a bijection ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)).

[F25] If $\alpha=\rho(w)e_s$, the root-reflection dictionary defines $t_\alpha=wsw^{-1}$ ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)).

[F11] Every root is positive or negative, with $\Phi=\Phi_+\sqcup\Phi_-$ and $\Phi_-=-\Phi_+$ ([[thm-cg-root-sign-and-simple-reflection-positivity]] (2)).

[F12] The support $S(w)$ is independent of the reduced expression, and $w\in W_J$ if and only if $S(w)\subseteq J$; hence every reduced expression of an element of $W_J$ uses only letters of $J$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1)).

[F13] Every cover $u\lessdot_R v$ has the form $v=us$ for some $s\in S$ with $\ell(v)=\ell(u)+1$ ([[lem-cg-weak-order-is-a-graded-partial-order]] (2)).

[F14] For each $J\subseteq S$, $(W_J,J)$ is a Coxeter system and its intrinsic length agrees with the ambient length on $W_J$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)).

[F15] For finite $W_J$, $w_0(J)^2=1$ and $\ell(w_0(J)u)=\ell(w_0(J))-\ell(u)=\ell(uw_0(J))$ for $u\in W_J$ ([[thm-cg-finite-parabolic-longest-element-and-opposition]] (2)).

[F16] For a reduced word $w=s_1\cdots s_n$, $N(w^{-1})=\{\rho(s_1\cdots s_{i-1})e_{s_i}:1\le i\le n\}$, these roots are distinct and positive, and $|N(w)|=|N(w^{-1})|=\ell(w)$ ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (2)).

[F17] For every $s\in S$, $\rho(s)$ permutes $\Phi_+\setminus\{e_s\}$ and sends $e_s$ to $-e_s$ ([[thm-cg-root-sign-and-simple-reflection-positivity]] (3)).

[F19] The right and left weak orders are partial orders ([[lem-cg-weak-order-is-a-graded-partial-order]] (1)).

[F20] If $u\le_R v$, there is a chain of simple-generator covers from $u$ to $v$ with exactly $\ell(v)-\ell(u)$ covers ([[lem-cg-weak-order-is-a-graded-partial-order]] (2),(3)).

[F22] For each positive root $\alpha$, $t_\alpha\in W_J$ exactly when $\alpha\in\Phi_{J,+}$ ([[thm-cg-parabolic-intersections-and-coset-factorization]] (2)).

[F23] For finite $W_J$, $\ell(w_0(J))=|\Phi_{J,+}|$ ([[thm-cg-finite-parabolic-longest-element-and-opposition]] (2)).

[F24] The right weak order is defined by $u\le_R v$ exactly when $v=ux$ and $\ell(v)=\ell(u)+\ell(x)$ for some $x\in W$ ([[def-cg-left-right-weak-order-and-descents]] (1)).

## Proof

**Proof technique:** compute the prefix inversion set from a reduced expression and use the weak-order inversion criterion. Construct the largest lift from the longest elements, prove the projection adjunctions, then establish the cover-root deletion and join identities. All choices are single witnesses in finite sets; AC is not used.

1.1 Finite setup and notation. By [F1], $W$ is finite, and each $W_J$ is finite. Fix $J\subseteq S$ and $w\in W$. Write $w=w_Jd$ for its unique length-additive factorization, with $d$ minimal in $W_Jw$ by [F6]; $w_J$, $W_J$, $\Phi_{J,+}$, $N$, $w_0$ and $w_0(J)$ have the meanings fixed in the Statement and [F7]-[F9],[F15]. [F1, F6, F7, F8, F9, F15, given]

1.2 The minimal representative above the parabolic factor. Let $L:=\ell(w_0)$ and $L_J:=\ell(w_0(J))$. By [F5], $q:=w_0(J)w_0$ has length $L-L_J$. For each $s\in J$, [F15] gives $\ell(sw_0(J))=L_J-1$ and [F5] gives $\ell(sq)=\ell(sw_0(J)w_0)=L-(L_J-1)=\ell(q)+1$. Thus $q$ has no left descent in $J$ and is the minimal representative of $W_Jw_0$ by [F6]. Since $w_0(J)^2=1$ by [F15], $w_0=w_0(J)q$. Therefore $x:=zq=z\,w_0(J)\,w_0$ is the length-additive parabolic factorization with prefix $z$, and $\ell(x)=\ell(z)+L-L_J$. Also $N(w_0(J)^{-1})\subseteq\Phi_{J,+}$ by [F8],[F16], and its cardinality is $L_J=|\Phi_{J,+}|$ by [F16],[F23]; consequently $w_0(J)$ sends every positive subsystem root to a negative subsystem root. [F5, F6, F8, F15, F16, F23]

1.3 Deleting a cover root. For $\alpha\in\operatorname{cov}(w)$ choose $s\in S$ with $t_\alpha w=ws$ and $\ell(ws)=\ell(w)-1$, and write a reduced word $w=q s$. Then $t_\alpha=w s w^{-1}=q s q^{-1}=t_{\rho(q)e_s}$ by [F25]; hence the unique positive root for this reflection is $\rho(q)e_s$ by [F10]. It is the last prefix root of $N(w^{-1})$; the prefix formula for $N((t_\alpha w)^{-1})=N(q^{-1})$ therefore gives $N((t_\alpha w)^{-1})=N(w^{-1})\setminus\{\alpha\}$. Conversely every cover predecessor $v\lessdot_R w$ is $v=ws$ for a generator $s$ by [F13], and its conjugate reflection $w s w^{-1}=t_\alpha$ has $\alpha\in N(w^{-1})$ by the prefix formula [F16]; hence $v=t_\alpha w$ with $\alpha\in\operatorname{cov}(w)$. Thus cover predecessors correspond exactly to deleting their cover roots. [F10, F13, F16, F25]

2.1 Prefix inversion set. Choose a reduced expression $w_J=s_1\cdots s_k$ with letters in $J$ (available by [F12]) and a reduced expression $d=s_{k+1}\cdots s_n$. Their concatenation is reduced by [F6]. The prefix roots for indices $i\le k$ in the formula [F16] are the prefix roots of $N(w_J^{-1})$ and lie in $\Phi_{J,+}$, because their reflections are words in $J$ and [F8] identifies the roots of $W_J$. If a suffix index $i>k$ had prefix root $\alpha_i\in\Phi_{J,+}$, then $t_{\alpha_i}\in W_J$ by [F22]. Write $w=p s_i r$ with $p=s_1\cdots s_{i-1}$ and $r=s_{i+1}\cdots s_n$. By [F16], $\alpha_i=\rho(p)e_{s_i}$, and [F25] gives $t_{\alpha_i}=p s_i p^{-1}$; hence $t_{\alpha_i}w=p r=w_Jd'$, where $d'$ is represented by the suffix word with $s_i$ deleted and has length at most $\ell(d)-1$. Since $t_{\alpha_i}\in W_J$, $t_{\alpha_i}w\in W_Jw=W_Jd$, so $d'=w_J^{-1}t_{\alpha_i}w\in W_Jd$. This contradicts the minimality of $d$. Thus no suffix root lies in $\Phi_{J,+}$, while all prefix roots do; the inversion formula gives $N(w^{-1})\cap\Phi_{J,+}=N(w_J^{-1})$. [F6, F8, F12, F16, F22, F25, step 1.1]

2.2 Inversion set of the lift. Let $x=z\,w_0(J)\,w_0$. If $\alpha\in\Phi_{J,+}$, then $\beta:=\rho(z^{-1})\alpha$ is a root of the subsystem. By step 1.2, $\rho(w_0(J))$ reverses the sign of subsystem roots, while $\rho(w_0)$ reverses the sign of every root; therefore $\rho(x^{-1})\alpha\in\Phi_-$ exactly when $\rho(z^{-1})\alpha\in\Phi_-$, so $\alpha\in N(x^{-1})$ exactly when $\alpha\in N(z^{-1})$. If $\alpha\in\Phi_+\setminus\Phi_{J,+}$, choose reduced words for $z^{-1}$ and $w_0(J)$; their letters lie in $J$ by [F12]. At every letter $r\in J$, the current root remains outside $V_J$: since $\rho(r)$ is invertible and preserves $V_J$ by [F8], it cannot send a vector outside $V_J$ into $V_J$. Thus the current root is never $e_r$, and [F17] keeps it positive. Then $\rho(w_0)$ sends the resulting positive root to a negative root by [F5], so every such $\alpha$ belongs to $N(x^{-1})$. This proves $N(x^{-1})=N(z^{-1})\cup(\Phi_+\setminus\Phi_{J,+})$. [F5, F8, F9, F11, F12, F17, step 1.2]

3.1 Greatest prefix and order-preserving projection. If $v\in W_J$, [F12] says every reduced word for $v$ uses only letters of $J$, so every prefix root of a reduced word for $v$ lies in $\Phi_{J,+}$ by [F8] and [F16]. Thus, when $v\le_R w$, the criterion [F3] and step 2.1 give $N(v^{-1})\subseteq N(w_J^{-1})$, so $v\le_R w_J$; conversely $w_J\le_R w$ by the factorization [F6] and the definition [F24]. This proves the greatest-element claim and $v\le_R w\iff v\le_R w_J$ for $v\in W_J$. If $x\le_R y$, intersect $N(x^{-1})\subseteq N(y^{-1})$ with $\Phi_{J,+}$ and apply step 2.1 to both prefixes; [F3] gives $x_J\le_R y_J$. [F3, F6, F8, F12, F16, F19, F24, step 2.1]

3.2 Cover-join clause (4)(i). Let $J=S\setminus\{s\}$ and assume the hypotheses of (i). By [F16], $N(s^{-1})=\{e_s\}$, so $e_s\in N(w^{-1})$ implies $s\le_R w$ by [F3]; also $w_J\le_R w$ by the length-additive factorization [F6] and the definition [F24]. The element $w$ is therefore a common upper bound. Suppose a strict common upper bound $u<_R w$ existed. By [F20], choose a cover predecessor $v\lessdot_R w$ with $u\le_R v$; by step 1.3 it deletes some $\alpha\in\operatorname{cov}(w)$. If $\alpha=e_s$, then $e_s\notin N(v^{-1})$, so $s\not\le_R v$ by [F3]. If $\alpha\ne e_s$, then $t_\alpha\in W_J$ by hypothesis and $\alpha\in\Phi_{J,+}$ by [F22]; steps 2.1 and 1.3 give $N(v_J^{-1})=N(w_J^{-1})\setminus\{\alpha\}$, so $w_J\not\le_R v$ by [F3]. Both cases contradict $u\le_R v$ and $s,w_J\le_R u$. Hence no strict common upper bound lies below $w$. The join $s\vee w_J$ exists by [F4], and by its least-upper-bound definition [F2] is at most $w$; it equals $w$. [F2, F3, F4, F6, F13, F16, F19, F20, F22, F24, step 2.1, step 1.3]

4.1 Largest-lift adjunction. If $y_J=z$, step 2.1 gives $N(y^{-1})\cap\Phi_{J,+}=N(z^{-1})$, so $N(y^{-1})\subseteq N(x^{-1})$ by step 2.2 and $y\le_R x$ by [F3]. Conversely, if $y\le_R x$, order preservation from step 3.1 gives $y_J\le_R x_J=z$. More generally, if $y_J\le_R z$, then $N(y^{-1})\cap\Phi_{J,+}=N(y_J^{-1})\subseteq N(z^{-1})$, while every root outside $\Phi_{J,+}$ is in $N(x^{-1})$; hence $N(y^{-1})\subseteq N(x^{-1})$ and $y\le_R x$. This proves the largest-lift claim and its stated equivalence. [F3, step 2.1, step 3.1, step 2.2]

4.2 Meet preservation. The finite weak orders on $W$ and $W_J$ are lattices by [F4] and [F14]. For $u\in W_J$, step 3.1 gives $u\le_R v$ exactly when $u\le_R v_J$. By the meet definition [F2], for every $u\in W_J$, $u\le_R x_J\wedge y_J$ exactly when $u\le_R x_J$ and $u\le_R y_J$, exactly when $u\le_R x$ and $u\le_R y$, exactly when $u\le_R x\wedge y$, exactly when $u\le_R (x\wedge y)_J$. Both candidate meets lie in $W_J$, so antisymmetry [F19] yields $(x\wedge y)_J=x_J\wedge y_J$. [F2, F4, F14, F19, step 3.1]

5.1 Join preservation and surjectivity. Put $z:=x_J\vee y_J\in W_J$ and let $X:=z\,w_0(J)\,w_0$ be its largest lift from step 4.1. Since $x_J,y_J\le_R z$, the adjunction in step 4.1 gives $x,y\le_R X$, so $x\vee y\le_R X$ and order preservation gives $(x\vee y)_J\le_R z$. Conversely, order preservation applied to $x,y\le_R x\vee y$ gives $x_J,y_J\le_R(x\vee y)_J$, hence $z\le_R(x\vee y)_J$. The join definition [F2] makes $z$ the least upper bound of $x_J,y_J$; the two bounds and antisymmetry [F19] yield $(x\vee y)_J=z$. If $z\in W_J$, then its parabolic factorization is $z=z\cdot1$, so $z_J=z$; the projection is onto $W_J$. [F2, F3, F4, F6, F14, F19, step 3.1, step 4.1]

6.1 Cover-join clause (4)(ii): the simple root and other parabolic covers. Let $y\in W_J$ and put $z:=s\vee y$. By [F12], every reduced expression of $y$ uses letters in $J$, so [F16] and [F8] give $N(y^{-1})\subseteq\Phi_{J,+}$. Since $J=S\setminus\{s\}$, the simple basis vector $e_s$ is not in $V_J$ and hence not in $\Phi_{J,+}$. Thus $N(s^{-1})\cap\Phi_{J,+}=\emptyset$ by [F16], and step 2.1 gives $N(s_J^{-1})=\emptyset=N(1)$. The inversion criterion [F3] and partial order [F19] imply $s_J=1$. Hence projection-join preservation in step 5.1 gives $z_J=y$. Further, $s\not\le_R y$, because $N(s^{-1})=\{e_s\}$ by [F16] and $e_s\notin\Phi_{J,+}$; thus $y<_R z$. Choose a cover predecessor $v\lessdot_R z$ with $y\le_R v$ by [F20]. Since $s\le_R z$, [F16] and [F3] give $e_s\in N(z^{-1})$; if $e_s\notin\operatorname{cov}(z)$, step 1.3 says no cover predecessor deletes it, so $e_s\in N(v^{-1})$ and $s\le_R v$, contradicting that $z$ is the join of $s$ and $y$. Hence $e_s\in\operatorname{cov}(z)$. If $\alpha\in\operatorname{cov}(z)\setminus\{e_s\}$ and $t_\alpha\notin W_J$, then $\alpha\notin\Phi_{J,+}$ by [F22]. The predecessor $v=t_\alpha z$ deletes only $\alpha$ by step 1.3, so it retains $N(y^{-1})\subseteq N(z^{-1})\cap\Phi_{J,+}$ and retains $e_s$; hence $y,s\le_R v<_R z$, again contradicting the join. Therefore every such $t_\alpha$ lies in $W_J$. [F2, F3, F8, F12, F13, F16, F19, F20, F22, step 2.1, step 5.1, step 1.3]

7.1 The cover roots inside the parabolic. Since $z_J=y$ by step 5.1, write $z=yd$ with $d$ the minimal left-coset representative. If $\alpha\in\operatorname{cov}(z)\setminus\{e_s\}$, step 6.1 gives $t_\alpha\in W_J$, so $\alpha\in\Phi_{J,+}$ by [F22]. Since $W_Jt_\alpha z=W_Jz$, $d$ remains the minimal representative of this coset by [F6], and $t_\alpha z=(t_\alpha y)d$ is the length-additive parabolic factorization. Thus its prefix is $t_\alpha y$; as $t_\alpha z$ covers $z$, lengths give $\ell(t_\alpha y)=\ell(y)-1$. Intersecting the deletion formula of step 1.3 with $\Phi_{J,+}$ and using step 2.1 gives $N((t_\alpha y)^{-1})=N(y^{-1})\setminus\{\alpha\}$. By [F3], $t_\alpha y\le_R y$, and the length difference one makes it a cover by [F20]; hence $\alpha\in\operatorname{cov}(y)$. Conversely let $\alpha\in\operatorname{cov}(y)$. By [F12], a reduced word for $y$ uses only letters in $J$; its prefix roots have the form in [F16] and lie in $\Phi_{J,+}$ by [F8], so $t_\alpha\in W_J$ by [F22]. Put $y':=t_\alpha y$ and $z':=s\vee y'$. Since $y'=ys$ with $\ell(y')=\ell(y)-1$, [F24] gives $y'<_R y$; therefore $z=s\vee y$ is an upper bound of $s,y'$ and [F2] gives $z'=s\vee y'\le_R z$. Step 5.1 gives $z'_J=y'$ and $z_J=y$, so $z'\ne z$; hence $z'<_R z$. Choose $v\lessdot_R z$ with $z'\le_R v$ by [F20], and let $\beta\in\operatorname{cov}(z)$ be its deleted root from step 1.3. Since $s,y'\le_R v$, if $\beta\notin N(y^{-1})$ then $N(y^{-1})\subseteq N(v^{-1})$ and $y\le_R v$, contradicting the join. If $\beta\in N(y^{-1})$, then step 1.3 gives $N((y')^{-1})=N(y^{-1})\setminus\{\alpha\}$; because $y'\le_R v$, the deleted root $\beta$ cannot lie in this latter set, so $\beta=\alpha$. Therefore $v=t_\alpha z$ and $\alpha\in\operatorname{cov}(z)$. This proves $\operatorname{cov}(z)=\operatorname{cov}(y)\cup\{e_s\}$. [F2, F3, F6, F8, F12, F13, F16, F19, F20, F22, F24, step 2.1, step 5.1, step 1.3, step 6.1]

8.1 Choice and conclusion. Steps 2.1 and 3.1 prove (1); steps 1.2, 2.2 and 4.1 prove (2); steps 4.2 and 5.1 prove (3); step 3.2 proves (4)(i); and steps 6.1 and 7.1 prove (4)(ii). Since $W$ is finite and each witness is selected from a finite interval or one fixed reduced expression at a time, no Axiom of Choice is used. [F1, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1, step 4.2, step 5.1, step 6.1, step 7.1] ∎

## Remarks

The Step-3 decision for [[def-cg-left-right-weak-order-and-descents]] remains escalated with the owner. This lemma uses that definition for the right weak-order relation and the join/meet definitions in [F2] and [F24], at Proof 3.1, 3.2, 4.2, 5.1, 6.1 and 7.1. The partial-order, cover and cover-chain claims used here come from [[lem-cg-weak-order-is-a-graded-partial-order]] instead.
