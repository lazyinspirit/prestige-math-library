Let $n \ge 1$, **assume the Axiom of Countable Choice**
([[def-countable-choice]]), and let $a_i \le b_i$ be reals for $i<n$. Write

$$R^{\circ} := \{\, x \in \mathbb{R}^n : a_i < x_i < b_i \text{ for every } i<n \,\}, \qquad \overline{R} := [a,b] = \{\, x \in \mathbb{R}^n : a_i \le x_i \le b_i \text{ for every } i<n \,\}$$

([[def-multidimensional-rectangle-and-volume]]). Then $R^{\circ}$ is open and
$\overline{R}$ is closed, so both are Borel and Lebesgue measurable, and **every**
set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue
measurable with

$$\lambda_n(R) \;=\; \prod_{i<n}(b_i-a_i).$$

In particular this covers the four one-dimensional face conventions in each
coordinate — the open box, the closed box $[a,b]$, the half-open box
$B(a,b) = \prod_{i<n}(a_i,b_i]$ of [[def-half-open-box]], and every mixture of
them, in any combination of coordinates — and it gives measure $0$ to all of them
whenever $a_i = b_i$ for some $i<n$. For a half-open box with infinite
parameters the value is already
$\lambda_n(B) = \operatorname{vol}(B)$ ([[thm-lebesgue-measure-is-a-complete-measure]]).
