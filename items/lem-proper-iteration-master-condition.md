---
id: lem-proper-iteration-master-condition
kind: lemma
title: "Proper iteration master-condition lemma"
status: published
origin: pipeline
deps: [def-countable-support-forcing-iteration, lem-proper-master-condition-characterizations, thm-two-step-generic-factorization-and-ccc, thm-forcing-theorem, thm-transfinite-induction, thm-countable-union-of-countable, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Jech, Set Theory, Lemmas 31.16-31.18 and complete Proper Iteration Lemma proof, printed pp. 605-606"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/31-proper_forcing.pdf
---

## Statement

Let $\langle P_\xi,\dot Q_\xi:\xi<\alpha\rangle$ be a countable-support
iteration such that every preceding stage forces $\dot Q_\xi$ proper. Let
$M\prec(H_\lambda,\in,<)$ be countable and contain the iteration. Suppose
$\gamma\in M\cap(\alpha+1)$, $q_0\in P_\gamma$ is
$(M,P_\gamma)$-generic, and the $P_\gamma$-name $\dot p$ satisfies

$$q_0\Vdash_{P_\gamma}\dot p\in P_\alpha\cap M\text{ and }\dot p\mathbin{\restriction}\gamma\in\dot G_\gamma.$$

Then there is an $(M,P_\alpha)$-generic $q\in P_\alpha$ such that
$q\mathbin{\restriction}\gamma=q_0$ and
$q\Vdash_{P_\alpha}\dot p\in\dot G_\alpha$.

## Facts & Assumptions

**Given:** ZFC and all iteration, model, name, and genericity hypotheses in the statement.

[F1] Countable-support iterations use two-step successors, supplied top names, and inverse limits of countably supported coherent conditions. [[def-countable-support-forcing-iteration]]

[F2] A condition is model-generic exactly when it forces ordinal-name values, or equivalently generic intersections with dense sets, to remain in the model. [[lem-proper-master-condition-characterizations]]

[F3] Two-step generics factor into a first-stage generic and a quotient generic, and conversely. [[thm-two-step-generic-factorization-and-ccc]]

[F4] The forcing theorem supplies definability of forcing and the truth lemma for all formulas and names used in the recursion. [[thm-forcing-theorem]]

[F5] Transfinite induction applies to the iteration length. [[thm-transfinite-induction]]

[F6] A countable union of countable sets is countable under countable Choice. [[thm-countable-union-of-countable]]

[A1] AC supplies well-ordered elementary structures, enumerations of dense sets and model ordinals, and the recursive name/condition choices. [[def-axiom-of-choice]]

## Proof

1.1 We prove the displayed extension property by transfinite induction on $\alpha$. At $\alpha=\gamma$ take $q=q_0$: the hypothesis already says $q_0$ forces $\dot p\in\dot G_\gamma$. Assume as induction hypothesis that the property holds at every smaller iteration length. [F1, F5, Given, base, IH]

1.2 We record the name-selection argument used below. Suppose $u$ forces that there is a set $x$ satisfying a fixed formula $\varphi(x)$. By the existential forcing clause, the conditions below $u$ that force $\varphi(\dot x)$ for some name $\dot x$ are dense below $u$. Use A1 to choose a maximal antichain $A$ of such conditions and, for each $a\in A$, one witness name $\dot x_a$. The usual mixed name $\dot x=\bigcup_{a\in A}(\dot x_a\mathbin{\restriction}a)$ agrees with $\dot x_a$ below $a$. Thus the conditions forcing $\varphi(\dot x)$ are dense below $u$, and the forcing definition gives $u\Vdash\varphi(\dot x)$. This derives the needed maximum principle from the forcing clauses and AC rather than attributing it to F4. [F4, A1]

2.1 Let $\alpha=\beta+1$. Apply the induction hypothesis at $\beta$ to obtain an $(M,P_\beta)$-generic $q_\beta$ extending $q_0$ and forcing $\dot p\mathbin{\restriction}\beta\in\dot G_\beta$. In a $P_\beta$-extension containing $q_\beta$, the last coordinate $p(\beta)$ belongs to $M[G_\beta]\cap Q_\beta$. Since $Q_\beta$ is proper there, choose an $(M[G_\beta],Q_\beta)$-master $q_\beta^*$ below it, and apply step 1.2 to choose a name for this condition. By F3, $(q_\beta,\dot q_\beta^*)$ forces $\dot p$ into the two-step generic. It is $(M,P_{\beta+1})$-generic: for any ordinal-valued $P_{\beta+1}$-name in $M$, the quotient master forces its value into $M[G_\beta]$, and the first-stage master then forces that ground ordinal into $M$; F2 applies. This gives the successor case. [F2, F3, F4, A1, IH, step 1.1, step 1.2]

2.2 Now let $\alpha$ be limit. The case $\gamma=\alpha$ was settled at step 1.1, so assume $\gamma<\alpha$ and put $\rho=\sup(M\cap\alpha)$. Choose an increasing sequence $\langle\gamma_n:n<\omega\rangle$ from $M\cap(\alpha+1)$ with $\gamma_0=\gamma$ and supremum $\rho$, and enumerate the dense subsets of $P_\alpha$ in $M$ as $\langle D_n:n<\omega\rangle$. Recursively construct $(M,P_{\gamma_n})$-generic $q_n$ and $P_{\gamma_n}$-names $\dot p_n$, beginning with the given pair, so that $q_{n+1}\mathbin{\restriction}\gamma_n=q_n$ and $q_n$ forces: $p_n\in P_\alpha\cap M$; $p_n\leq p_{n-1}$ and $p_n\in D_{n-1}$ for $n>0$; and $p_n\mathbin{\restriction}\gamma_n\in G_{\gamma_n}$. For the recursive step, work in a $P_{\gamma_n}$-generic extension containing $q_n$ and resolve $p_n\in P_\alpha\cap M$. In the ground model define $$E=\{u\in P_{\gamma_n}:u\perp p_n\restriction\gamma_n\text{ or }(\exists r\leq p_n)\,[r\in D_n\ \&\ u\leq r\restriction\gamma_n]\}.$$ The set $E$ belongs to $M$ and is dense: below a condition compatible with $p_n\restriction\gamma_n$, first take a common extension, paste it to the tail of $p_n$, and then strengthen the resulting $P_\alpha$-condition into $D_n$. Since $q_n$ is an $(M,P_{\gamma_n})$-master, the generic meets $E\cap M$. Its member cannot take the incompatible alternative because $p_n\restriction\gamma_n$ is in the same generic. Elementarity therefore supplies $p_{n+1}\in D_n\cap M$ below $p_n$ whose restriction lies in the generic. Apply step 1.2 to name that choice, then apply the induction hypothesis at $\gamma_{n+1}<\alpha$ to obtain $q_{n+1}$. [F1, F2, F4, A1, IH, step 1.1, step 1.2]

3.1 Define $q$ on $\rho$ by $q=\bigcup_nq_n$ and fill every coordinate in $[\rho,\alpha)$ with its supplied top name. This is a condition: the equalities $q_{n+1}\mathbin{\restriction}\gamma_n=q_n$ make the union a coherent function, and F6 makes its support, a subset of $\bigcup_n\operatorname{supp}(q_n)$, countable. This is the only fusion operation; no coordinatewise lower bound in an arbitrary proper iterand is used. To check what $q$ forces, take any $P_\alpha$-generic $G$ containing it and resolve the names $p_n$. For $k\geq n$, the construction and truth lemma give $p_n\mathbin{\restriction}\gamma_k\in G_{\gamma_k}$. Also $p_n\in M$, so the countable set $\operatorname{supp}(p_n)$ belongs to $M$ and is a subset of $M\cap\alpha\subseteq\rho$; hence $p_n\mathbin{\restriction}\rho=p_n$. The inverse-limit generic is determined on a condition by these cofinal projections, so $p_n\in G_\rho\subseteq G_\alpha$. Thus $q$ forces $p_n\in G_\alpha$ for every $n$, in particular $p_0=p$. [F1, F4, F6, A1, step 2.2]

4.1 Step 3.1 shows that $q$ forces $p_{n+1}\in D_n\cap M\cap G_\alpha$ for every $n$, so every $D_n\cap M$ is predense below $q$; F2 makes $q$ $(M,P_\alpha)$-generic. Its restriction to $\gamma_0$ is $q_0$, and step 3.1 gives $q\Vdash\dot p\in\dot G_\alpha$. The base, successor, and limit cases exhaust the induction, so the lemma holds for every $\alpha$. AC is used exactly in A1, including the countable-support union through F6. [F2, F5, F6, A1, step 1.1, step 2.1, step 3.1, discharge-induction: step 1.1, step 2.1, step 3.1] ∎
