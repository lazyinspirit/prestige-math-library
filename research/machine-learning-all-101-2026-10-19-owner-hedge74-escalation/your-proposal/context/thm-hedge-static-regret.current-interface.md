## Statement

Let $N,T\ge1$ be integers and let $\epsilon>0$. Let $\ell_t(i)\ge0$ be a finite real loss for every $t\in\{1,\ldots,T\}$ and $i\in[N]=\{1,\ldots,N\}$. Run Hedge with $W_1(i)=1$, $x_t(i)=W_t(i)/\sum_{j=1}^N W_t(j)$, measurable draws $I_t$ satisfying $\mathbb P(I_t=i)=x_t(i)$, and updates $W_{t+1}(i)=W_t(i)\exp(-\epsilon\ell_t(i))$. Assume the entire loss-vector sequence is fixed before the learner's random choices. For every fixed expert $i^\star\in[N]$, writing $\ell_t^{(2)}(i)=\ell_t(i)^2$, one has
$$
\sum_{t=1}^T\sum_{i=1}^N x_t(i)\ell_t(i)\le\sum_{t=1}^T\ell_t(i^\star)+\epsilon\sum_{t=1}^T\sum_{i=1}^N x_t(i)\ell_t^{(2)}(i)+\frac{\log N}{\epsilon},
$$
where $\log$ is the natural logarithm.

If every loss lies in $[0,1]$ and $N\ge2$, choosing $\epsilon=\sqrt{\log N/T}$ gives expected static regret at most $2\sqrt{T\log N}$:
$$
\mathbb E\!\left[\sum_{t=1}^T\ell_t(I_t)-\min_{i\in[N]}\sum_{t=1}^T\ell_t(i)\right]\le2\sqrt{T\log N}.
$$
For $N=1$, the expected static regret is $0$.
