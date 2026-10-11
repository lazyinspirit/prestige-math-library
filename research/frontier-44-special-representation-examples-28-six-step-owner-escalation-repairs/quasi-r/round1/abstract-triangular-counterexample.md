# Finite-column triangular bars do not ensure finite corrected lifts

This is an auxiliary algebra counterexample, not a counterexample to the approved quantum-module Statement. It rejects one attempted proof route in the ongoing first owner repair round.

Put $A=\mathbb Z[q,q^{-1}]$, $V=\bigoplus_{n\ge0}A^2$, and order its raw basis by increasing $n$, with the two vectors at each level incomparable. Every order interval is finite. Let $S$ shift one level upward, put $s=q+q^{-1}$ and

$$N=(q-q^{-1})\begin{pmatrix}s&1\\-s^2&-s\end{pmatrix},\qquad R=I+SN.$$

The inner matrix is $\binom{1}{-s}(s,1)$, whose row-column product is zero. Thus $N^2=0$. Coefficient bar fixes $s$ and negates $q-q^{-1}$, so $\bar N=-N$. Consequently $R\bar R=I$. Each column of $R$ and its inverse $I-SN$ has finite support, all coefficients are Laurent integral, and $R$ is strictly triangular above its identity diagonal. The semilinear map $T=R\circ\mathrm{bar}$ is an involution.

Suppose a finite-supported $T$-fixed lift of $e_{0,2}$ existed with corrections in $q\mathbb Z[q]$. Write it as $g=\sum_{n\ge0}S^np_n$ with $p_0=(0,1)^t$ and $p_n\in(q\mathbb Z[q])^2$ for $n>0$. Fixedness says

$$p_n-\bar p_n=N\bar p_{n-1}\qquad(n\ge1).$$

An anti-invariant Laurent polynomial has a unique solution in $q\mathbb Z[q]$, its strictly positive-power part. The second column of $N$ is $(q-q^{-1},-q^2+q^{-2})^t$, so $p_1=(q,-q^2)^t$. Direct multiplication gives

$$N\binom{q^{-1}}{-q^{-2}}=\binom{q-q^{-1}}{-q^2+q^{-2}}.$$

Therefore $p_n=(q,-q^2)^t$ for every $n\ge1$. The forced lift has infinitely many nonzero levels. This contradicts membership in the algebraic direct sum $V$.

Thus Laurent integrality, finite columns, triangularity with diagonal one, locally finite order intervals and involutivity alone do not give finite-supported positive-q corrected lifts. A formal correction exists in the product completion, but that is not the promised algebraic tensor basis. In particular, the missing quantum-module argument cannot be replaced by the generic assertion that every finite-column triangular involution has the required finite correction.

The example does not carry an asserted quantum-group action or the four based-module axioms. It leaves open whether those extra axioms force the additional local support bound required by the approved finite-type arbitrary-based branch.
