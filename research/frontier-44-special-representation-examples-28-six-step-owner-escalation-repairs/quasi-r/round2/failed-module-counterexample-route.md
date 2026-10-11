# An overlapping sl-two graph deformation is not a valid counterexample

This records a failed construction, not an item claim. It explains why the abstract triangular-bar counterexample from round1 has not been promoted to a quantum-module counterexample.

Put $p=[2]=q+q^{-1}$ and take finite highest modules of even highest coroot $n$. Modulo $p$, the vector $Fv_{n+2}$ has weight $n$, is killed by $E$ since $E Fv_{n+2}=[n+2]v_{n+2}\equiv0$, and satisfies all divided-F relations beyond $n$: $F^{(r)}Fv=[r+1]F^{(r+1)}v$, whose coefficient vanishes modulo $p$ at the sole possible endpoint $r=n+1$, with later terms zero by the target's dimension. This gives the relevant quotient map modulo $p$. Its integer lift on the standard divided string sends even positions to signed odd positions and kills odd positions, since $[r+1]$ reduces to $0$ for odd $r$ and $\pm1$ for even $r$.

Finite disjoint graph deformations can preserve the based data, but simultaneous overlapping deformations need additional verification. Already in the first three modules, write the proposed lower raw vector as $c_0=v_0+Fv_2/p$ and the next top raw vector as $c_{2,\mathrm{top}}=v_2+Fv_4/p$, while retaining $Fv_4$ as a raw target basis vector. Then

$$E c_0=v_2=c_{2,\mathrm{top}}-Fv_4/p.$$

The last coefficient is not in $A=\mathbb Z[q,q^{-1}]$. Thus this overlapping lattice fails $U_A$-stability, a defining based-module axiom. Taking infinitely many copies does not cure that defect. Adding higher constituent corrections would require a new complete construction preserving local nilpotence, integral action and the crystal basis; none has been established here.

This attempted route therefore gives no counterexample to the approved unrestricted finite-type globalization clause. The valid abstract counterexample remains confined to finite-column triangular involutions without a claimed quantum-module action.
