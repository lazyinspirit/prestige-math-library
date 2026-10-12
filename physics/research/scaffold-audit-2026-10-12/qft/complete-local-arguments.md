# QFT audit-local arguments

These are research arguments for the revised future interface map, not accepted
library proofs. They use real algebra and direct quotient limits where stated.
In particular, the statistical covariance and weighted-estimator
clauses from historical QX11 are intentionally absent; they have no current
consumer or proof dependency under the owner scope constraint.

## MX04-D — deterministic ratio error and Taylor remainder

Let
$$R(a,c)=1+\frac ac,$$
for real $a$ and $c>0$, where $c$ is this lemma's denominator
variable, not the speed of light used elsewhere in the physics scaffold.
Suppose real errors $\delta a,\delta c$
satisfy $|\delta a|\leq\epsilon_a$ and
$|\delta c|\leq\epsilon_c<c$, where both error bounds are nonnegative.
Then $c+\delta c\geq c-\epsilon_c>0$, and direct subtraction gives
$$R(a+\delta a,c+\delta c)-R(a,c) =\frac{c\delta a-a\delta c}{c(c+\delta c)}.$$
The triangle inequality and the positive denominator therefore imply
$$\left|R(a+\delta a,c+\delta c)-R(a,c)\right| \leq \frac{c\epsilon_a+|a|\epsilon_c}{c(c-\epsilon_c)}.$$
No probability space, random variable, covariance, sample model, or inference
assumption occurs in this statement or proof.

For the first-order Taylor bound, write $h=(u,v)=(\delta a,\delta c)$,
with Euclidean norm $\|h\|_2=(u^2+v^2)^{1/2}$. Assume $c+v>0$, and let
the segment from $x=(a,c)$ to $x+h$ lie in
the explicit rectangle
$$Q=[A_-,A_+]\times[c_-,c_+],\qquad A_-\leq A_+,\quad 0<c_-\leq c_+.$$
Set $A_*:=\max(|A_-|,|A_+|)$ and
$$K_Q:=\frac{A_*+c_+/2}{c_-^3}.$$
The coordinate difference quotients
$$R(a+\epsilon,c)-R(a,c)=\epsilon/c,\qquad R(a,c+\epsilon)-R(a,c)=-a\epsilon/[c(c+\epsilon)]$$
give $\nabla R(a,c)=(c^{-1},-ac^{-2})$ by their defining limits. Direct
subtraction gives the following remainder. Here $\nabla R(x)$ denotes the
vector representing the real linear total derivative under the Euclidean dot
product:
$$R(x+h)-R(x)-\nabla R(x)\cdot h =\frac{av^2-cuv}{c^2(c+v)}.$$
Because $(a,c),(a+u,c+v)\in Q$, their coordinates satisfy
$c,c+v\geq c_-$, $c\leq c_+$, and $|a|\leq A_*$. Also
$2|uv|\leq u^2+v^2$, since $(|u|-|v|)^2\geq0$. Hence
$$|av^2-cuv| \leq A_*v^2+c_+|uv| \leq (A_*+c_+/2)(u^2+v^2),\qquad c^2(c+v)\geq c_-^3.$$
Combining these inequalities with the exact remainder gives
$$|R(x+h)-R(x)-\nabla R(x)\cdot h| \leq K_Q\|h\|_2^2.$$
This is a deterministic local Taylor bound with an explicit finite constant
from the rectangle bounds. Its proof uses quotient limits and elementary
algebra only; it invokes no calculus supplier and makes no statistical
interpretation of the increments. In particular, for any fixed $x$ choose
a small rectangle with $x$ in its interior and positive second-coordinate
lower bound. For all sufficiently small $h$, the bound applies on that
rectangle; dividing by $\|h\|_2$ makes the remainder tend to zero. Thus the
displayed vector is the total derivative, not just the pair of coordinate
partial derivatives.

For the hypothetical B08 values $a=1\,\mathrm{Hz}$,
$c=100\,\mathrm{Hz}$, $\epsilon_a=0.1\,\mathrm{Hz}$, and
$\epsilon_c=1\,\mathrm{Hz}$, the exact nominal value is $R=1.01$,
and the first bound is
$$\frac{100(0.1)+1(1)}{100(100-1)}=\frac{11}{9900}.$$
These are stipulated interval inputs, not Fan et al.'s experimental
uncertainties and not a confidence interval.
