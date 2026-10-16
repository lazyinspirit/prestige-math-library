# Finite simplex/affine-slice error bound without a draft Farkas supplier

Let Delta={p in R^d:p_i>=0,sum_i p_i=1}, d>=1, let M:R^d->R^r be linear, and let F={q in Delta:Mq=b} be nonempty. There is H<infinity such that dist(p,F)<=H||Mp-b||_2 for all p in Delta. This is the exact special Hoffman statement needed for finite DMC capacity; it requires no general polyhedral duality theorem.

Existence of a nearest q in F follows because F is nonempty compact (or use the actual published `thm-nearest-point-in-a-nonempty-closed-convex-set`). Its projection variational inequality is the actual published `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`.

For each support pattern J subset [d] realized by at least one q in F, define the closed cone

C_J={v:sum_i v_i=0, v_i>=0 for i outside J, <v,w><=0 for every w with sum_iw_i=0,Mw=0,w_i>=0 for i outside J}.

It is closed: the first two conditions are finitely many closed linear conditions, and the last is an intersection of closed halfspaces indexed by a fixed set of w. If v is in C_J and Mv=0, then v itself is one of the permissible w, so ||v||^2=<v,v><=0 and v=0. Therefore on the compact set C_J intersect {||v||=1}, if nonempty, the continuous function ||Mv|| has a strictly positive minimum c_J. There are only finitely many support patterns. If none of these unit sections is nonempty, every point of Delta belongs to F, and the desired inequality is trivial with H=1. Otherwise let c be the minimum of the finitely many positive c_J and set H=1/c.

To apply this constant, take p outside F and nearest q in F. Put v=(p-q)/||p-q|| and J=supp q. Then sum_i v_i=0 and v_i>=0 outside J. For any w in the set defining C_J, q+t w lies in F for all sufficiently small t>=0: its sum stays one, its M-image stays b, its coordinates outside J are nonnegative, and its finitely many positive coordinates inside J remain positive for sufficiently small t. The projection inequality <p-q,q+t w-q><=0 thus gives <v,w><=0. Hence v belongs to C_J. Consequently

||Mp-b||=||M(p-q)||=||p-q|| ||Mv||>=c||p-q||=c dist(p,F).

This proves the error bound. The p in F case is immediate. The argument does not assume that normalized differences remain in the original simplex; it only uses their explicitly closed support-pattern cones, avoiding the defective normalization step in older capacity-decay proofs. Zero output dimension r=0 is also covered: then F=Delta, so only the trivial branch is used. All pattern choices are finite, and no choice axiom is intrinsically used.

For the DMC apply M p=(p_{E^c},pW), b=(0,q*). The gap identity and sharp finite Pinsker imply C-I(p)>=a||Mp-b||^2 with a=min{eta,1/2}>0 when E^c nonempty, eta=min_{x outside E}(C-D(W_x||q*)); when E^c empty use a=1/2 and omit that block. Thus C-I(p)>=a H^{-2}dist(p,Pi)^2. If Pi=Delta take any positive alpha because distance is always zero.
