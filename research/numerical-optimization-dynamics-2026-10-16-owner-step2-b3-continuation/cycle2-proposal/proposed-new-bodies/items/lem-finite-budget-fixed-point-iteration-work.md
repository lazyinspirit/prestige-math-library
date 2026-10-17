## Statement
For admissible inputs of [[alg-fixed-point-iteration]] with budget $N\in\mathbb N_0$, every entered iterate belongs to $X$. The procedure uses at most $N$ updates and $N+1$ fixed-point residual evaluations and returns one of its stated statuses. Termination is in the model where each map evaluation, metric evaluation and comparison returns in finite time. These counts specify outer procedure operations and give no bound on the internal cost of evaluating the supplied map or metric.

## Facts & Assumptions
**Given:** The algorithm's metric space, self-map, initial point, tolerance and finite budget, and returning evaluation primitives.
[F1] [[alg-fixed-point-iteration]] evaluates its residual once at each entered index, tests tolerance before budget, returns at index $N$ if tolerance fails, and updates only when $k<N$.

## Proof
1.1 Initially $x_0\in X$. If an update is made from $x_k\in X$, the self-map condition gives $x_{k+1}=G(x_k)\in X$. Induction proves membership of every entered iterate. [given, F1, induction]
2.1 A continuing pass advances its index by one. At index $N$, either the residual test returns or the budget test returns before another update. Thus the entered indices form an initial segment of $0,\ldots,N$, with at most $N+1$ residual evaluations and $N$ updates. Every pass contains finitely many returning primitives, so the procedure terminates with a stated status. This includes $N=0$. [F1, step 1.1, induction] ∎
