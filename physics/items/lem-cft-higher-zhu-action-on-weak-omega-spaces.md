---
id: lem-cft-higher-zhu-action-on-weak-omega-spaces
kind: lemma
title: Higher Zhu action on the Omega spaces of an arbitrary weak module
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
- def-vertex-algebra-state-field
- thm-cft-higher-zhu-algebra-structure
- def-vertex-algebra-module
- def-cft-higher-zhu-algebra
dependency_roles:
  def-vertex-algebra-state-field: mathematical-premise
  thm-cft-higher-zhu-algebra-structure: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-cft-higher-zhu-algebra: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Dong, Li and Mason, Vertex operator algebras and associative algebras
    url: https://arxiv.org/abs/q-alg/9612010
    locator: The higher Omega action is proved here directly by finite coefficient identities.
dependency_level: 2
---

## Statement

Let V be a vertex operator algebra with finite-dimensional nonnegative integral state grades, allowing V0 larger than C1, and let M be any weak left V-module. For an integer $N\ge 0$ define
$$\Omega_N(M)=\{w\in M:\ a_{(m)}w=0\text{ whenever }a\text{ is homogeneous and }m\geq\mathrm{wt}(a)+N\}.$$
For homogeneous a of weight r put $o(a)=a_{(r-1)}$, extending linearly in a. Every o(a) preserves $\Omega_N(M)$, every element of $O_N(V)$ acts by zero, and
$$o(a*_N b)w=o(a)o(b)w,\qquad o(\mathbf1)w=w.$$
When V is of CFT type, the linked associative-quotient theorem consequently makes $\Omega_N(M)$ a unital left $A_N(V)-module$. The preservation, $O_N-annihilation$ and multiplicativity identities themselves hold in the full nonnegative scope just stated. No grading, local finiteness or semisimplicity of L(0) on M is assumed. This is the forward action; no converse rationality criterion is asserted.

## Facts & Assumptions

**Given:** The full non-super conformal state-field setup and weak module in the Statement. Here the broader term “vertex operator algebra” means the following data, without the CFT-type condition $V_0=\mathbb C\mathbf1$.

[F1] $V$ is a complex vector space with vacuum $\mathbf1\in V_0$, translation $T$, and state-field map $Y(a,z)=\sum_{j\in\mathbb Z}a_{(j)}z^{-j-1}$ satisfying the lower-truncation, vacuum/creation, translation-covariance, and locality axioms of [[def-vertex-algebra-state-field]]. It has a conformal vector $\omega\in V_2$ with $Y(\omega,z)=\sum_{j\in\mathbb Z}L(j)z^{-j-2}$ and central charge $c\in\mathbb C$, where $[L(m),L(n)]=(m-n)L(m+n)+\frac{c}{12}(m^3-m)\delta_{m+n,0}\operatorname{id}_V$ for all $m,n\in\mathbb Z$, and $L(-1)=T$. The operator $L(0)$ is diagonalizable and $V=\bigoplus_{r\geq0}V_r$, where $V_r=\{a:L(0)a=ra\}$ is finite dimensional. No condition $V_0=\mathbb C\mathbf1$ is imposed. A weak left module $M$ is a complex vector space with a lower-truncated field map $Y_M(a,z)=\sum_{m\in\mathbb Z}a^M_{(m)}z^{-m-1}$, vacuum action, and the full module Jacobi identity of [[def-vertex-algebra-module]]; it has no grading or $L(0)$-semisimplicity assumption. For homogeneous $a\in V_r$, write $\mathrm{wt}(a)=r$.

[F2] Taking the two residues of the module Jacobi identity in [F1] gives, for all integers $m,n$,
$$[a^M_{(m)},b^M_{(n)}]=\sum_{j\geq0}\binom mj(a_{(j)}b)^M_{(m+n-j)},\qquad (a_{(m)}b)^M_{(n)}=\sum_{t\geq0}(-1)^t\binom mt\left(a^M_{(m-t)}b^M_{(n+t)}-(-1)^m b^M_{(m+n-t)}a^M_{(t)}\right).$$
The first sum is finite by state truncation; on each fixed vector the two terms of the iterate sum are separately finite by rightmost-mode truncation. For negative integer upper indices, $\binom mt=m(m-1)\cdots(m-t+1)/t!$. Translation covariance and the conformal-vector residues give $(Ta)^M_{(m)}=-m a^M_{(m-1)}$, $[L_M(0),a^M_{(m)}]=(r-m-1)a^M_{(m)}$, and $\mathrm{wt}(a_{(j)}b)=r+\mathrm{wt}(b)-j-1$ when the state product is nonzero. These are consequences of the stated Jacobi axioms; they do not require $V_0=\mathbb C\mathbf1$.

[F3] For homogeneous $a\in V_r$ and $b\in V$, and each $N\geq0$, the formulas used here are
$$a\circ_N b=\sum_{j=0}^{r+N}\binom{r+N}{j}a_{(j-2N-2)}b,\qquad a*_N b=\sum_{p=0}^{N}(-1)^p\binom{N+p}{N}\sum_{j=0}^{r+N}\binom{r+N}{j}a_{(j-N-p-1)}b,$$
$$D a=(T+L(0))a=Ta+ra,\qquad O_N(V)=\operatorname{span}_{\mathbb C}\{a\circ_N b,\;Da:a,b\in V\},$$
where the circle expression is extended linearly over homogeneous first inputs. This is the full nonnegative-grade convention used locally; in the CFT-type case it agrees with [[def-cft-higher-zhu-algebra]], and [[thm-cft-higher-zhu-algebra-structure]] separately proves associativity and descent of the quotient product.

## Proof


1.1 Let a have weight r and b have weight s. For $m\ge s+N$, commuting $b_m$ past $a_{r-1}$ gives terms $(b_j a)_{m+r-1-j}$ with coefficient binom(m,j). Their state weight is s+r-j-1 and their mode index is at least this weight plus N. Each kills w in $\Omega_N(M)$, as does $a_{r-1}b_m$ w. The commutator sum is finite by state truncation. Thus o(a) preserves $\Omega_N(M)$. Vacuum acts identically by the module vacuum identity. [given, F2, algebra]

1.2 The zero mode of a circle generator is
$$\sum_{j=0}^{r+N}\binom{r+N}{j}(a_{(j-2N-2)}b)_{(r+s+2N-j)}.$$
Apply the iterate identity. In every first term the b index is $r+s+2N-j+t\ge s+N$, so that term kills w. In the second terms the b index is the fixed r+s-2-t. Values $t\ge r+N$ kill w through $a_t$. For each remaining $t<r+N$, the summed coefficient is a scalar multiple of
$$\sum_{j=0}^{r+N}(-1)^j\binom{r+N}{j}\binom{j-2N-2}{t}=0,$$
the finite difference of order r+N of a polynomial in j of degree t. Thus every circle generator acts by zero. All sums can be exchanged here: j ranges over a finite set; in the first iterate sum $b_{r+s+2N-j+t}w$ is zero for all large t, and in the second $a_t$ w is zero for all large t. Also $o(Ta+ra)=-r a_{r-1}+r a_{r-1}=0$. Therefore $o(O_N(V))=0$. This includes $r+N=0$, where the second surviving t range is empty. [F1, F2, algebra]

2.1 Expand $o(a*_N b)$ using F1 and the iterate identity. For a fixed outer star index p, the second iterate terms again have b index r+s-2-t independent of j. They vanish for $t\ge r+N$, and for $t<r+N$ their sum over j is the finite difference of the degree-t polynomial binom(j-N-p-1,t), hence zero. In the first terms put the a index $k=j-N-p-1-t$. Its b index is r+s-2-k. The Omega cutoff on b eliminates $k\le r-N-2$. The inequalities $j\le r+N$ and $t\ge 0$ give $k\le r-1$. Thus the only possible terms are
$$a_{(r-1-a)}b_{(s-1+a)}w,\qquad 0\leq a\leq N.$$
Write $l=r+N-j$. Then $t=a-p-l$, so their coefficient is exactly
$$C_a=\sum_{p=0}^{a}(-1)^p\binom{N+p}{N} \sum_{l=0}^{a-p}\binom{r+N}{l}(-1)^{a-p-l}\binom{r-p-l-1}{a-p-l}.$$
This expression accounts for every surviving first term; it uses no cancellation of unknown infinite sums. [F1, F2, step 1.2, algebra]

3.1 The inner sum is the coefficient of $x^{a-p}$ in
$$(1-x)^{r-p-1}\left(1+\frac{x}{1-x}\right)^{r+N}=(1-x)^{-N-p-1}.$$
It therefore equals binom(N+a,a-p). Consequently
$$C_a=\sum_{p=0}^{a}(-1)^p\binom{N+p}{N}\binom{N+a}{a-p} =\binom{N+a}{a}\sum_{p=0}^{a}(-1)^p\binom ap =\begin{cases}1&a=0,\\0&a>0.\end{cases}$$
Only o(a)o(b)w remains, proving multiplicativity. Step 1.1 and step 1.2 give the claimed full-scope identities. In the CFT-type case F1 then gives the claimed unital $A_N(V)-action$. No existence/induction theorem or nonresonance of conformal-weight differences was used. [F1, step 1.1, step 1.2, step 2.1, algebra] ∎
