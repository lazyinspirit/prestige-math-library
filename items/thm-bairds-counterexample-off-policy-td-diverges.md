---
id: thm-bairds-counterexample-off-policy-td-diverges
kind: theorem
title: Expected off-policy TD(0) diverges in Baird’s seven-state example
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-markov-decision-process
  - def-policy-bellman-operator
  - def-projected-bellman-error
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - lem-geometric-sequence-null
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://raw.githubusercontent.com/mutual-ai/Book/main/books/RL/RLbook2020.pdf"
      locator: "§11.2, Figure 11.1, Figure 11.2, and equation (11.9); PDF pp. 283–285 in this copy, printed pp. 261–263."
    - title: "John N. Tsitsiklis and Benjamin Van Roy, An Analysis of Temporal-Difference Learning with Function Approximation"
      url: "https://web.mit.edu/~jnt/www/Papers/J063-97-bvr-td.pdf"
      locator: "§IX, Theorem 3 and complete finite-state off-line-sampling counterexample, printed pp. 686–688; independent context only, not a supplier for Baird’s calculation."
---

## Statement

Let the states be $S=\{s_1,\ldots,s_7\}$ and the two actions available at each state be $\mathrm{dashed}$ and $\mathrm{solid}$. All rewards are zero and $\gamma=0.99$. Under $\mathrm{dashed}$, the next state is each of $s_1,\ldots,s_6$ with probability $1/6$; under $\mathrm{solid}$, the next state is $s_7$ with probability $1$. The behavior policy has $b(\mathrm{dashed}\mid s)=6/7$ and $b(\mathrm{solid}\mid s)=1/7$ at every state, and the target policy selects $\mathrm{solid}$ with probability $1$. Use the uniform state weighting $\mu(s)=1/7$. For standard basis vectors $e_1,\ldots,e_8$ of $\mathbb R^8$, set $\phi(s_i)=2e_i+e_8$ for $1\leq i\leq6$ and $\phi(s_7)=e_7+2e_8$, and define $v_w(s)=\phi(s)^\mathsf T w$. For a behavior transition $(S,A,S')$, draw $S$ from $\mu$, draw $A$ from $b(\cdot\mid S)$, and draw $S'$ from the stated action transition law. Put $\rho=\pi(A\mid S)/b(A\mid S)$ and $\delta=\gamma v_w(S')-v_w(S)$, and define the expected semi-gradient TD(0) update by $\bar w^+=w+\alpha\,\mathbb E_{\mu,b}[\rho\delta\,\phi(S)]$. Also define the synchronous expected dynamic-programming update by $w^+=w+\frac{\alpha}{7}\sum_{s\in S}\big((T^\pi v_w)(s)-v_w(s)\big)\phi(s)$. For every step size $\alpha>0$, both deterministic update sequences starting at $w_0=(1,1,1,1,1,1,10,1)$ have Euclidean norm $\|w\|_2=(\sum_{i=1}^8w_i^2)^{1/2}$ tending to infinity. This is a claim about the stated expected/deterministic updates; it asserts no probability-one divergence result for individual stochastic TD trajectories.

## Statement references

[[def-finite-markov-decision-process|The finite state/action transition model and stationary policies]].

[[def-projected-bellman-error|The fixed state weighting, feature map, and policy Bellman operator]].

[[def-policy-bellman-operator|The expected discounted value of one policy-controlled transition]].

[[def-eigenvalue-eigenvector-eigenspace-and-spectrum|An eigenvalue is a scalar with a nonzero eigenvector]].

[[lem-geometric-sequence-null|A positive geometric sequence with ratio greater than one diverges to infinity]].

[[thm-cauchy-schwarz-and-the-euclidean-norm|The Euclidean inner product satisfies Cauchy–Schwarz]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*, 2nd ed., §11.2](https://raw.githubusercontent.com/mutual-ai/Book/main/books/RL/RLbook2020.pdf).

[Tsitsiklis and Van Roy, “An Analysis of Temporal-Difference Learning with Function Approximation,” §IX](https://web.mit.edu/~jnt/www/Papers/J063-97-bvr-td.pdf).

## Facts & Assumptions

**Given:** The seven-state finite MDP, behavior and target policies, state weighting, feature values, step size, and initial vector in the Statement.

[F1] [[def-finite-markov-decision-process]]: a finite joint transition/reward law induces the state-transition probabilities, and a stationary policy is a probability distribution over the available actions at each state.

[F2] [[def-projected-bellman-error]] and [[def-policy-bellman-operator]]: $v_w(s)=\phi(s)^\mathsf T w$, and $T^\pi v_w$ is the expected discounted one-step target under the target policy.

[F3] [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: $\lambda$ is an eigenvalue of a real linear map when a nonzero vector $x$ satisfies $T(x)=\lambda x$.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for real vectors $x,y$, $|\langle x,y\rangle|\leq\|x\|_2\|y\|_2$.

[F5] [[lem-geometric-sequence-null]]: if $r\in\mathbb R$ and $|r|>1$, then $|r|^n\to+\infty$.

## Proof

1.1 Write $\phi_i=2e_i+e_8$ for $1\leq i\leq6$ and $\phi_7=e_7+2e_8$. The importance ratio is $7$ on solid and $0$ on dashed. Under behavior, every next-state probability is $1/7$: each upper state is reached with probability $(6/7)(1/6)$ and $s_7$ with probability $1/7$. Thus the expected TD update direction is $\frac17\sum_{i=1}^7\phi_i(\gamma\phi_7^\mathsf T w-\phi_i^\mathsf T w)$. The target Bellman value is $\gamma\phi_7^\mathsf T w$ at every state, so this also gives the synchronous expected DP direction. Both recurrences are $w^+=(I+\alpha M)w$, where $M=\frac17\sum_i\phi_i(\gamma\phi_7-\phi_i)^\mathsf T$. [given, F1, F2, algebra]

2.1 The update preserves equality of the first six coordinates. Write their common value as $a$, and put $b=w_7$, $c=w_8$. Set $q_u=\gamma(b+2c)-(2a+c)=-2a+\gamma b+(2\gamma-1)c$ and $q_7=(\gamma-1)(b+2c)$. By step 1.1, each upper feature contributes $2q_u$ to its own coordinate and $q_u$ to coordinate $8$, while $\phi_7$ contributes $q_7$ to coordinate $7$ and $2q_7$ to coordinate $8$, all with factor $\alpha/7$. Thus $a^+=a+2\alpha q_u/7$, $b^+=b+\alpha q_7/7$, and $c^+=c+\alpha(6q_u+2q_7)/7$. Hence $y=(a,b,c)^\mathsf T$ follows $y^+=(I+\alpha B/7)y$, where $B=\begin{pmatrix}-4&2\gamma&4\gamma-2\\0&\gamma-1&2\gamma-2\\-12&8\gamma-2&16\gamma-10\end{pmatrix}$ and $y_0=(1,10,1)^\mathsf T$. [given, step 1.1, algebra]

3.1 At $\gamma=99/100$, let $q(t)=t^2-(183/100)t+13/50$. Its distinct roots are $t_\pm=(183\pm\sqrt{23089})/200$, both positive because $23089<183^2$ and their sum and product are positive. Put $t=t_+$, $u=-12/(t+4)$, $v=(2\gamma u+8\gamma-2)/(t+1-\gamma)$, and $\ell=(u,v,1)$. By the definitions of $u$ and $v$, the first two coordinates of $\ell B=t\ell$ hold. [given, step 2.1, algebra]

4.1 For the third coordinate, substitution gives $(4\gamma-2)u+(2\gamma-2)v+(16\gamma-10)-t=\frac{-5000tq(t)}{50(t+4)(100t+1)}=0$; the denominator is nonzero since $t>0$, and $q(t)=0$. Thus $\ell B=t\ell$, so $(B/7)^\mathsf T\ell^\mathsf T=(t/7)\ell^\mathsf T$. Since $\ell=(u,v,1)\ne0$, [F3] makes $t/7>0$ an eigenvalue of the transpose map. [given, F3, step 3.1, algebra]

4.2 The quadratic in step 3.1 has $q(8/5)=-27/250<0$ and $q(9/5)=103/500>0$. Since it has positive leading coefficient and two distinct roots, the first sign places $8/5$ between the roots, and the second places $9/5$ to the right of $t_+$; hence $8/5<t<9/5$. Therefore $u=-12/(t+4)>-15/7$. Using $\gamma=99/100$ and $u>-15/7$ gives $2\gamma u+8\gamma-2>2(99/100)(-15/7)+8(99/100)-2=587/350$. Also $0<t+1-\gamma<181/100$, so $v>(587/350)/(181/100)=58700/63350>9/10$. It follows that $\ell y_0=u+10v+1>-15/7+10=55/7>0$. [given, step 3.1, algebra]

5.1 For every $\alpha>0$, $r=1+\alpha t/7>1$, so [F5] gives $r^n\to+\infty$. Induction using the recurrence in step 2.1 and the eigenrelation in step 4.1 yields $\ell y_n=r^n\ell y_0\to+\infty$, since step 4.2 proves $\ell y_0>0$. As $\ell\neq0$, [F4] implies $\|y_n\|_2\geq|\ell y_n|/\|\ell\|_2\to\infty$. The first six full weights equal $a_n$, so $\|w_n\|_2^2=6a_n^2+b_n^2+c_n^2\geq\|y_n\|_2^2$. Step 1.1 showed that the expected TD and synchronous DP recurrences coincide, proving both divergences. [given, F4, F5, step 1.1, step 2.1, step 4.1, step 4.2, induction, algebra] ∎
## Remarks

The “deadly triad” is used here only as an explanatory name for the interaction among off-policy sampling, bootstrapping, and function approximation. This example does not prove that every method using those ingredients diverges, and it gives no general convergence or divergence theorem for deep neural networks.

## Diagram

In the diagram, each circle is an actual state. Solid-action transitions are shown as solid arrows to $s_7$. The dashed box is a routing symbol, not a state: a two-segment dashed path represents one dashed-action transition, whose endpoint is chosen uniformly from the six upper states. All rewards are zero. The diagram restates the model; the proof uses the explicit transition probabilities and feature vectors above.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
  \node[circle,draw] (s1) at (0,1.6) {$s_1$};
  \node[circle,draw] (s2) at (1.5,1.6) {$s_2$};
  \node[circle,draw] (s3) at (3,1.6) {$s_3$};
  \node[circle,draw] (s4) at (4.5,1.6) {$s_4$};
  \node[circle,draw] (s5) at (6,1.6) {$s_5$};
  \node[circle,draw] (s6) at (7.5,1.6) {$s_6$};
  \node[circle,draw] (s7) at (3.75,-0.2) {$s_7$};
  \node[draw,dashed,rounded corners,align=center] (U) at (9.5,1.6) {uniform draw\\from $\{s_1,\ldots,s_6\}$};
  \foreach \s in {s1,s2,s3,s4,s5,s6} {
    \draw[dashed,->,thin] (\s) to[bend left=10] node[above,sloped] {$\mathrm{dashed}$} (U);
    \draw[solid,->] (\s) to[bend right=12] node[below,sloped] {$\mathrm{solid}$} (s7);
  }
  \draw[dashed,->,thin] (s7) to[bend left=10] node[above,sloped] {$\mathrm{dashed}$} (U);
  \draw[solid,->] (s7) to[loop below] node[below] {$\mathrm{solid}$} (s7);
  \foreach \s in {s1,s2,s3,s4,s5,s6} {
    \draw[dashed,->,thin] (U) to[bend left=7] (\s);
  }
  \node[align=left,anchor=west] at (8.8,-0.5) {$b(\mathrm{dashed}\mid s)=6/7$\\$b(\mathrm{solid}\mid s)=1/7$\\$\pi(\mathrm{solid}\mid s)=1$};
\end{tikzpicture}
```
